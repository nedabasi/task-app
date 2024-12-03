"use client";

import React, { useState } from "react";
import NavigationList from "./NavigationList";

export default function NavigationManager() {
  const [navigationItems, setNavigationItems] = useState<
    { id: string; label: string; url?: string }[]
  >([]);
  const [newItem, setNewItem] = useState({ label: "", url: "" });

  // Handle form submission to add a new item
  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newItem.label.trim()) {
      alert("Label is required!");
      return;
    }

    const newItemWithId = { ...newItem, id: Date.now().toString() }; // Unique ID based on timestamp
    setNavigationItems((prev) => [...prev, newItemWithId]);
    setNewItem({ label: "", url: "" }); // Reset the form
  };

  // Handle drag-and-drop reorder
  const handleReorder = (
    updatedItems: { id: string; label: string; url?: string }[]
  ) => {
    setNavigationItems(updatedItems);
  };

  // Handle editing an existing item
  const handleEdit = (id: string) => {
    const item = navigationItems.find((item) => item.id === id);
    if (item) {
      const newLabel = prompt("Edit label:", item.label);
      const newUrl = prompt("Edit URL:", item.url || "");
      if (newLabel) {
        setNavigationItems((prev) =>
          prev.map((navItem) =>
            navItem.id === id
              ? { ...navItem, label: newLabel, url: newUrl || "" }
              : navItem
          )
        );
      }
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Navigation Manager</h1>

      {/* Form for adding a new navigation item */}
      <form
        onSubmit={handleAddItem}
        className="space-y-4 border p-4 bg-white rounded shadow"
      >
        <div>
          <label className="block font-bold mb-2">Label</label>
          <input
            type="text"
            value={newItem.label}
            onChange={(e) => setNewItem({ ...newItem, label: e.target.value })}
            placeholder="Enter label"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-bold mb-2">URL</label>
          <input
            type="text"
            value={newItem.url}
            onChange={(e) => setNewItem({ ...newItem, url: e.target.value })}
            placeholder="Enter URL (optional)"
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Item
        </button>
      </form>

      {/* Navigation List with drag-and-drop functionality */}
      <NavigationList
        items={navigationItems}
        onReorder={handleReorder}
        onEdit={handleEdit}
      />
      
      {/* Empty state */}
      {navigationItems.length === 0 && (
        <p className="text-gray-500 text-center">
          No navigation items added yet.
        </p>
      )}
    </div>
  );
}
