import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, name, position, jobId } = body;

        // Simple validation
        if (!email || !position) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
        }

        // Check if user exists, else create
        let user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            user = await prisma.user.create({
                data: {
                    email,
                    name: name || email.split('@')[0],
                },
            });
        }

        // Check if job exists, if not create a default one for now
        let jobConnect = {};
        if (jobId) {
            jobConnect = { connect: { id: jobId } };
        } else {
            // Create a default "General Application" job if none specified
            const defaultJob = await prisma.job.findFirst({ where: { title: position } });
            if (defaultJob) {
                jobConnect = { connect: { id: defaultJob.id } };
            } else {
                jobConnect = {
                    create: {
                        title: position,
                        description: "User submitted application",
                    }
                }
            }
        }

        const application = await prisma.application.create({
            data: {
                user: { connect: { id: user.id } },
                // @ts-ignore
                job: jobConnect,
                status: 'PENDING',
            },
            include: {
                job: true,
            },
        });

        return NextResponse.json(application);
    } catch (error) {
        console.error('Error creating application:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const email = searchParams.get('email');

        if (!email) {
            return NextResponse.json({ error: 'Email required' }, { status: 400 });
        }

        const applications = await prisma.application.findMany({
            where: {
                // Validation ensures this is an email, but Prisma handles it safely
                user: {
                    email: email,
                },
            },
            include: {
                job: true,
            },
            orderBy: {
                appliedAt: 'desc',
            },
        });

        return NextResponse.json(applications);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
