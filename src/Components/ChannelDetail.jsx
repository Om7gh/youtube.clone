import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchApi } from "../utils/fetchApi";
import channelCard from "./ChannelCard";
import videoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchApi(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });
    fetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
      setVideos(data?.items);
    });
  }, [id]);

  return (
    <Box minHeight="95vh" width="100%">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,20,247,1) 0%, rgba(206,3,184,1)) 100%",
            height: "300px",
            zIndex: 10,
          }}
        />

        <ChannelCard marginTop="-130px" channelDetail={channelDetail} />
      </Box>
      <Box display="flex" p="2" ml="100px">
        <Box sx={{ mr: { sm: "100px" } }}>
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
