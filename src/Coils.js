import React from "react";

// import styles from "./Coils.module.css";

import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from "@tanstack/react-table";

// type Person = {
//   coils: string,
//   devices: string
// };

// const defaultData: Person[] = [

function Coils() {
  const defaultData = [
    {
      coils: "Smok - LP1 (0.8, 0.9, 1.2)",
      devices: "Smok - Novo 4, Pozz Pro"
    },
    {
      coils: "Smok - LP2 (0.23, 0.4, 0.6)",
      devices: "Smok - Morph, Morph S, Nord 50W, RPM 4, G-priv pod, G-priv pro"
    },
    {
      coils: "Smok - RPM (0.3, 0.4, 0.6, 0.8, 1.0, 1.2)",
      devices:
        "Smok - RPM40, RPM80, RPM80 Pro, Pozz X, Alike, Nord 2, Nord 4, Fetch Mini, Fetch Pro, RPM Lite"
    },
    {
      coils: "Smok - Nord (0.6, 0.8, 1.4)",
      devices:
        "Smok - Nord, Nord 2, Fetch Mini, Trinity Alpha, Nord Pen 22, Nord Pen 19, Priv N19, Nord Vape Pen Tank, ALIKE, Priv V8 Nord"
    },
    {
      coils: "Smok - RPM 2 (0.16, 0.25, 0.6)",
      devices: "Smok - RPM 2, Nord 4, Nord X"
    },
    {
      coils:
        "Smok - Baby V2 (S2 0.15ohm, K1 0.2ohm, K4 0.15ohm, A1 0.17ohm, A2 0.2ohm, A3 0.15ohm,)",
      devices:
        "Smok - Stick V9 max Kit, Stick V9 Kit, TFV8 Baby V2 Tank, R-kiss Kit"
    },
    {
      coils:
        "Smok - Baby (X4 0.15ohm, T8 0.15ohm, T12 Red 0.15ohm, T12 0.15ohm, Strip 0.15ohm, Mesh 0.15ohm, M2 0.15ohm, T6 0.2ohm, Q4 0.4ohm, Q2 0.4ohm, M2 0.25ohm, RBA)",
      devices:
        "Smok - Scar-mini Kit, TFV9 mini Tank, Rigel Kit, Scar-18 Kit, TFV9 Tank, TFV8 Big Baby Tank, TFV8 baby Tank, TFV12 baby prince Tank Rigel Mini Kit"
    },
    {
      coils: "Geekvape - B (0.3, 0.4, 0.6, 1.2)",
      devices: "Geekvape - Boost, Boost Plus, Z Nano, Hero Pod"
    },
    {
      coils: "Geekvape - G (0.6, 0.8, 1.0, 1.2)",
      devices: "Geekvape - Aegis Pod, Wenax Pod"
    },
    {
      coils: "Geekvape - P (0.2, 0.4)",
      devices: "Geekvape - Boost Pro, Obelisk"
    },
    {
      coils: "Voopoo - TPP (0.15, 0.2 , 0.3)",
      devices: "Voopoo - TPP Pod Tank, Drag X Plus,Drag 3 TPP Kit"
    },
    {
      coils: "Voopoo - PNP  (0.15, 0.2, 0.3, 0.45, 0.6, 0.8, 1.0)",
      devices:
        "Voopoo - Vinci, Drag S, Drag X, Drag Baby Trio, Argus Air, PnP Pod Tank, Argus GT, V Suit"
    },
    {
      coils: "Geekvape - Aegis Nano (0.6, 1.2)",
      devices: "Geekvape - Aegis Nano"
    },
    {
      coils: "Voopoo - Vinci, Drag Nano 2 (0.8, 1.2)",
      devices: "Voopoo - Vinci Pod, Drag Nano"
    }
  ];

  // const columns: ColumnDef<Person>[] = [
  const columns = [
    {
      accessorKey: "coils",
      cell: (info) => info.getValue(),
      header: () => <span>Койлы</span>,
      footer: (info) => info.column.id
    },
    {
      accessorFn: (row) => row.devices,
      id: "devices",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Девайсы</span>,
      footer: (info) => info.column.id
    }
  ];
  const [data, setData] = React.useState(() => [...defaultData]);
  const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Coils;
