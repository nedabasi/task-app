import React from "react";
import { useForm } from "react-hook-form";

export default function NavigationForm({
  onSubmit,
  defaultValues,
}: {
  onSubmit: (data: { label: string; url?: string }) => void;
  defaultValues?: { label?: string; url?: string };
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const handleCancel = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="label" className="block font-medium">
          Name
        </label>
        <input
          id="label"
          {...register("label", { required: "Name is required" })}
          className="border p-2 rounded w-full"
        />
        {errors.label && <p className="text-red-500">{errors.label.message}</p>}
      </div>
      <div>
        <label htmlFor="url" className="block font-medium">
          Link
        </label>
        <input
          id="url"
          {...register("url")}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="flex space-x-2">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
