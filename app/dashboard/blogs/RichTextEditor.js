"use client";
import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";

import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableHeader } from "@tiptap/extension-table-header";
import { TableCell } from "@tiptap/extension-table-cell";


export default function RichTextEditor({ value, onChange }) {
  const [mounted, setMounted] = useState(false);

  // Mark as mounted on client to avoid SSR hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const editor = useEditor({
    extensions: [
      Image.configure({ allowBase64: true }),
      StarterKit.configure({ heading: { levels: [1, 2, 3, 4] } }),
      Link.configure({ openOnClick: true, autolink: true, linkOnPaste: true }),
    
    // 🔽 NEW: Table support
      Table.configure({ resizable: true, lastColumnResizable: true }),
    TableRow,
    TableHeader,
    TableCell,
    ],
    content: "",                 // <- don't set server-side content
    immediatelyRender: false,    // <- IMPORTANT for SSR
    onUpdate: ({ editor }) => onChange?.(editor.getHTML()),
    editorProps: {
    attributes: {
        class:
        "prose max-w-none min-h-[300px] w-full rounded-xl border bg-white px-3 py-2 focus:outline-none overflow-y-auto max-h-[500px]",
    },
    },
  });

  // After mount, set initial content on the client
  useEffect(() => {
    if (mounted && editor && typeof value === "string") {
      editor.commands.setContent(value, false); // false = don't emit transaction as update
    }
  }, [mounted, editor]); // intentionally omit `value` to avoid resetting while typing

  if (!mounted || !editor) return null;

  const setLink = () => {
    const url = prompt("Enter URL");
    if (!url) return;
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  return (
    <div className="grid gap-2">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 rounded-xl border bg-white p-2 text-sm">
        <Btn active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}>Bold</Btn>
        <Btn active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}>Italic</Btn>
        <Btn onClick={() => editor.chain().focus().toggleBulletList().run()}>• List</Btn>
        <Btn onClick={() => editor.chain().focus().toggleOrderedList().run()}>1. List</Btn>
        <Btn active={editor.isActive("heading", { level: 1 })} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>H1</Btn>
        <Btn active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</Btn>
        <Btn active={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</Btn>
        <Btn onClick={setLink}>Link</Btn>
        <Btn onClick={() => editor.chain().focus().unsetLink().run()}>Unlink</Btn>
        <Btn onClick={() => editor.chain().focus().undo().run()}>Undo</Btn>
        <Btn onClick={() => editor.chain().focus().redo().run()}>Redo</Btn>
        {/* 🔽 TABLE TAB / BUTTONS */}
        <div className="mx-2 h-6 w-px bg-slate-200" />
        <Btn onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}>
          Insert Table
        </Btn>
        <Btn onClick={() => editor.chain().focus().addColumnBefore().run()}>Col Before</Btn>
        <Btn onClick={() => editor.chain().focus().addColumnAfter().run()}>Col After</Btn>
        <Btn onClick={() => editor.chain().focus().deleteColumn().run()}>Del Col</Btn>
        <Btn onClick={() => editor.chain().focus().addRowBefore().run()}>Row Before</Btn>
        <Btn onClick={() => editor.chain().focus().addRowAfter().run()}>Row After</Btn>
        <Btn onClick={() => editor.chain().focus().deleteRow().run()}>Del Row</Btn>
        <Btn onClick={() => editor.chain().focus().toggleHeaderRow().run()}>Toggle Header</Btn>
        <Btn onClick={() => editor.chain().focus().mergeCells().run()}>Merge</Btn>
        <Btn onClick={() => editor.chain().focus().splitCell().run()}>Split</Btn>
        <Btn onClick={() => editor.chain().focus().deleteTable().run()}>Delete Table</Btn>
    </div>

      <EditorContent editor={editor} />
    </div>
  );
}

function Btn({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "rounded-md px-3 py-1 transition " +
        (active ? "bg-slate-900 text-white" : "bg-slate-100 hover:bg-slate-200")
      }
    >
      {children}
    </button>
  );
}
