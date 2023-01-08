import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category, key) => (
        <button
          onClick={() => setSelectedCategory(category.name)}
          key={key}
          className="category-btn"
          style={{
            backgroundColor: category.name === selectedCategory && "#fc1503",
            textAlign: "center",
            color: "#ccc",
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "#fff" : "#fc1503",
              marginRight: "10px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{ opacity: category.name === selectedCategory ? "1" : ".7" }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
