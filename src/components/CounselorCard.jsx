import React from 'react'

export default function CounselorCard(Counselor) {
  console.log(Counselor)
  return (
    <div>
      <h1>{Counselor.name}</h1>
      <h1>{Counselor.degree}</h1>

    </div>
  )
}
