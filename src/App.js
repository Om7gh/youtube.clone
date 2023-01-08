import React, { useEffect } from "react";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  ChannelDetail,
  Feed,
  SearchFeed,
  VideoDetail,
} from "./Components";
const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Poppins", "Oxygen"],
      },
    });
  }, []);

  return (
    <Router>
      <Box sx={{ backgroundColor: "#18171d" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" exact element={<VideoDetail />} />
          <Route path="/channel/:id" exact element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
