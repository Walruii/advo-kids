import QuizF from './quizf'
import { getUserById } from '@/server-actions/serveractions';
import { SessionType, options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { SimpleUser } from '@/models/user';


export default async function Quiz({ params }: { params: { storyline: string } }) {
  const storylineNumber = Number(params.storyline);

  const data: SessionType | null = await getServerSession(options);
  if (data?.user?.userId) {
    const user: SimpleUser | null = await getUserById(data.user.userId);
    if (user) {
      return (
        <div className="container my-10">
          <QuizF
            storylineNumber={storylineNumber}
            user={user}
          />
        </div>
      )
    }
  } else {
    return (
      <div>
        ERROR FINDING QUESTION
      </div>
    )
  }
}
