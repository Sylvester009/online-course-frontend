'use client';

import { useParams } from 'next/navigation';

export default function CourseDetails() {
  const { id } = useParams(); // Get the course ID from the dynamic route

  return (
    <div>
      <h1>Course Details</h1>
      <p>Details for course {id}</p>
    </div>
  );
}
