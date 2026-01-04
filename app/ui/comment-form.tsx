'use client'; // Indicates that this component is a Client Component, allowing hooks and interactivity

import { useRef } from 'react'; // Import the useRef hook from React to reference DOM elements
import { ArrowRightIcon } from '@heroicons/react/24/outline'; // Import the ArrowRightIcon from Heroicons

export default function CommentForm({
  // Define the CommentForm component
  create, // Destructure the 'create' prop
}: {
  // Define the type for the props
  create: (formData: FormData) => Promise<void>; // 'create' is a function that takes FormData and returns a Promise
}) {
  const formRef = useRef<HTMLFormElement>(null); // Create a ref to access the form DOM element, initialized to null

  return (
    // Return the JSX to render
    <form // Start the form element
      ref={formRef} // Attach the ref to the form element
      action={async (formData) => {
        // Define the action to run when the form is submitted
        await create(formData); // Call the server action 'create' with the form data
        formRef.current?.reset(); // Reset the form fields using the ref after submission
      }}
      className="flex w-full max-w-md flex-col gap-4" // Apply Tailwind CSS classes for styling (flexbox, width, gap)
    >
      <div className="relative">
        {' '}
        {/* Container for the input field */}
        <input // The input element for the comment
          type="text" // Set input type to text
          placeholder="Write a comment..." // Placeholder text
          name="comment" // Name attribute for the form data key
          required // Make the field required
          className="peer block w-full rounded-lg border border-gray-200 py-[9px] pl-4 text-sm outline-2 placeholder:text-gray-500 focus:border-primaryHover focus:ring-primaryHover" // Tailwind classes for styling the input
        />
      </div>
      <button // The submit button
        type="submit" // Set button type to submit
        className="flex items-center gap-5 self-start rounded-lg bg-primaryHover px-6 py-3 text-sm font-nabla text-white transition-colors hover:bg-primary md:text-base" // Tailwind classes for styling the button
      >
        <span>Submit</span> <ArrowRightIcon className="w-5 md:w-6" />{' '}
        {/* Button text and icon */}
      </button>
    </form>
  );
}
