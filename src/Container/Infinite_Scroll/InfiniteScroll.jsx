import React, { useState, useEffect } from 'react';
import { CircularProgress, List, ListItem, ListItemText, Paper } from '@mui/material';
import axios from 'axios';

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    setLoading(true);
    try {
        const response = await axios.get(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=10&page=${page}`);
    //   const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
      setData((prevData) => [...prevData, ...response.data]);
      setPage(page + 1);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch initial data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Attach scroll event listener to trigger fetching more data
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !loading) {
        fetchData();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  return (
    <div>
      <h1>Infinite Scroll Example</h1>
      <Paper elevation={3} style={{ maxHeight: '400px', overflowY: 'scroll' }}>
        <List>
          {data.map((item) => (
            <ListItem key={item.id}>
              <ListItemText primary={item.title} secondary={item.body} />
            </ListItem>
          ))}
        </List>
        {loading && <CircularProgress />}
      </Paper>
    </div>
  );
};

export default InfiniteScroll;
