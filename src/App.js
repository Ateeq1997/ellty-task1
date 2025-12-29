import { useState } from "react";
import "./App.css";
import Checkbox from "./Checkbox";

const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];

export default function App() {
  const [openId, setOpenId] = useState(null);

  const [items, setItems] = useState(
    Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      selectedPages: [],
    }))
  );

  const toggleAll = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              selectedPages:
                item.selectedPages.length === pages.length ? [] : pages,
            }
          : item
      )
    );
  };

  const togglePage = (id, page) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              selectedPages: item.selectedPages.includes(page)
                ? item.selectedPages.filter((p) => p !== page)
                : [...item.selectedPages, page],
            }
          : item
      )
    );
  };

  return (
    <div className="home">
      {items.map((item) => {
        const isAllSelected = item.selectedPages.length === pages.length;

        return (
          <div key={item.id}>
            {/* Home Button */}
            <div
              className="list-item"
              onClick={() => setOpenId(item.id)}
            >
              <span>All pages</span>
              <div className="right">
                <Checkbox checked={isAllSelected} />
                <span className="more">⋮</span>
              </div>
            </div>

            {/* Dropdown */}
            {openId === item.id && (
              <div className="overlay">
                <div className="dropdown-card">
                  <div className="row">
                    <span>All pages</span>
                    <Checkbox
                      checked={isAllSelected}
                      onChange={() => toggleAll(item.id)}
                    />
                  </div>

                  {pages.map((page) => (
                    <div className="row" key={page}>
                      <span>{page}</span>
                      <Checkbox
                        checked={item.selectedPages.includes(page)}
                        onChange={() => togglePage(item.id, page)}
                      />
                    </div>
                  ))}

                  <button
                    className="done-btn"
                    onClick={() => setOpenId(null)}
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
