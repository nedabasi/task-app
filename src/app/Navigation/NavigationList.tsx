// "use client";

// import React from "react";
// import { DndContext, closestCenter } from "@dnd-kit/core";
// import {
//   arrayMove,
//   SortableContext,
//   useSortable,
//   verticalListSortingStrategy,
// } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";

// export default function NavigationList({
//   items,
//   onReorder,
//   onEdit,
// }: {
//   items: { id: string; label: string; url?: string }[];
//   onReorder: (
//     updatedItems: { id: string; label: string; url?: string }[]
//   ) => void;
//   onEdit: (id: string) => void;
// }) {
//   // Handle drag-and-drop events
//   const handleDragEnd = (event: any) => {
//     const { active, over } = event;

//     if (active.id !== over.id) {
//       const oldIndex = items.findIndex((item) => item.id === active.id);
//       const newIndex = items.findIndex((item) => item.id === over.id);
//       const updatedItems = arrayMove(items, oldIndex, newIndex);
//       onReorder(updatedItems);
//     }
//   };

//   return (
//     <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
//       <SortableContext items={items} strategy={verticalListSortingStrategy}>
//         <div className="space-y-4">
//           {items.map((item) => (
//             <SortableItem key={item.id} item={item} onEdit={onEdit} />
//           ))}
//         </div>
//       </SortableContext>
//     </DndContext>
//   );
// }

// function SortableItem({
//   item,
//   onEdit,
// }: {
//   item: { id: string; label: string; url?: string };
//   onEdit: (id: string) => void;
// }) {
//   const { attributes, listeners, setNodeRef, transform, transition } =
//     useSortable({
//       id: item.id,
//     });

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//   };

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       {...attributes}
//       {...listeners}
//       className="flex items-center justify-between border p-4 rounded shadow-sm bg-white"
//     >
//       <div>
//         <p className="font-bold">{item.label}</p>
//         {item.url && (
//           <a
//             href={item.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-500"
//           >
//             {item.url}
//           </a>
//         )}
//       </div>
//       <button
//         onClick={() => onEdit(item.id)}
//         className="text-blue-600 underline hover:text-blue-800"
//       >
//         Edit
//       </button>
//     </div>
//   );
// }
"use client";

import React from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function NavigationList({
  items,
  onReorder,
  onEdit,
}: {
  items: { id: string; label: string; url?: string }[];
  onReorder: (
    updatedItems: { id: string; label: string; url?: string }[]
  ) => void;
  onEdit: (id: string) => void;
}) {
  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      const updatedItems = arrayMove(items, oldIndex, newIndex);
      onReorder(updatedItems);
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className="space-y-4">
          {items.map((item) => (
            <SortableItem key={item.id} item={item} onEdit={onEdit} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}

function SortableItem({
  item,
  onEdit,
}: {
  item: { id: string; label: string; url?: string };
  onEdit: (id: string) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: item.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex items-center justify-between border p-4 rounded shadow-sm bg-white"
    >
      <div>
        <p className="font-bold">{item.label}</p>
        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            {item.url}
          </a>
        )}
      </div>
      <button
        onClick={() => onEdit(item.id)}
        className="text-blue-600 underline hover:text-blue-800"
      >
        Edit
      </button>
    </div>
  );
}
