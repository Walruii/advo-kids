export type SessionType = {
  user: {
    name: string,
    email: string,
    image: string,
    userId: string,
  }
  expires: string,
  accessToken: string
}

export const getUser = async (userId: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
      method: "GET",
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if (!response.ok) {
      throw new Error('Failed to Get');
    }

    const result = await response.json();
    return result.user

  }
  catch (error) {
    console.error('Error Getting:', error);
  }
}

export const getQues = async (language: string, storyline: string, question: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/${language}/storylines/${storyline}/questions/${question}`, {
      method: "GET",
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if (!response.ok) {
      throw new Error('Failed to Get');
    }

    const result = await response.json();
    return result.question

  }
  catch (error) {
    console.error('Error Getting:', error);
  }
}

export const getQuestionSet = async (language: string, storylineNumber: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/${language}/storylines/${storylineNumber}/questions`, {
      method: "GET",
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if (!response.ok) {
      throw new Error('Failed to Get');
    }

    const result = await response.json();
    return result.questions

  }
  catch (error) {
    console.error('Error Getting:', error);
  }
}

export const getStoryline = async (language: string, number: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/${language}/storylines/${number}`, {
      method: "GET",
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if (!response.ok) {
      throw new Error('Failed to Get');
    }

    const result = await response.json();
    return result.storylineToSend

  }
  catch (error) {
    console.error('Error Getting:', error);
  }
}

export const getStorylines = async (language: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/${language}/storylines`, {
      method: "GET",
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if (!response.ok) {
      throw new Error('Failed to Get');
    }

    const result = await response.json();
    return result.storylines

  }
  catch (error) {
    console.error('Error Getting:', error);
  }
}

export const setLanguage = async (userId: string, language: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/users/${userId}/language`, {
      method: "POST",
      body: JSON.stringify({ language }),
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if (!response.ok) {
      throw new Error('Failed to Post');
    }

    const result = await response.json();
    return result.language

  }
  catch (error) {
    console.error('Error Posting:', error);
  }
}
