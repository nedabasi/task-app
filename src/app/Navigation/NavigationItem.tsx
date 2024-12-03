import React from "react";

export default function NavigationItem({
  item,
  onEdit,
  onDelete,
  onAddSubItem,
}: {
  item: { id: number; label: string; url?: string };
  onEdit: (item: any) => void;
  onDelete: (id: number) => void;
  onAddSubItem: (id: number) => void;
}) {
  return (
    <div className="flex items-center justify-between border p-4 rounded shadow-sm">
      <div>
        <p className="font-bold">{item.label}</p>
        {item.url && (
          <a href={item.url} className="text-blue-500">
            {item.url}
          </a>
        )}
      </div>
      <div className="flex space-x-2">
        <button onClick={() => onEdit(item)} className="text-blue-600">
          Edit
        </button>
        <button onClick={() => onDelete(item.id)} className="text-red-600">
          Delete
        </button>
        <button
          onClick={() => onAddSubItem(item.id)}
          className="text-green-600"
        >
          Add Sub-item
        </button>
      </div>
    </div>
  );
}
