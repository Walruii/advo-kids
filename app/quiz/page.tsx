import Card from './card'
import { SessionType, options } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { StorylineSchema } from "../../models/storylines"
import { SimpleUser } from '@/models/user'
import { getStorylines, getUserById } from '@/server-actions/serveractions'

export default async function play() {
  const data: SessionType | null = await getServerSession(options)
  let user: SimpleUser | null = null
  if (data) {
    user = await getUserById(data.user.userId)
  }
  if (user) {
    var storylines: Array<StorylineSchema> | null = await getStorylines(user.language)
  } else {
    var storylines: Array<StorylineSchema> | null = await getStorylines("English")
  }

  if (storylines) {
    return (
      <div>
        {storylines.map(({ storyline_number, description, title, questions }: { storyline_number: number, description: string, title: string, questions: number }) => (
          <Card
            key={storyline_number}
            storylineNumber={storyline_number}
            title={title}
            description={description}
            questions={questions}
            user={user}
          />
        ))}
      </div>
    )
  }
}