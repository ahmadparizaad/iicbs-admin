import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card, Button, Typography, DialogActions, DialogContent, DialogTitle, Dialog } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import { IconArrowLeft } from '@tabler/icons';
// import img1 from 'src/views/sample-page/assets/images/opplogo.png';
// import img2 from 'src/views/sample-page/assets/images/oppmain.png';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// const newsList = [

//   {
//     id: 1,
//     title: 'Exciting News 1',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
//     datePosted: '26 Jan 2023',
//     image: img1,
//   },
//   {
//     id: 2,
//     title: 'Important Announcement 2',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
//     datePosted: '27 Jan 2023',
//     image: img2,
//   },
//   // Add more news items here
// ];

const MyOpportunities = styled.div`
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: 500;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.div`
  flex: 1;
  text-align: center;
`;

const BackIcon = styled(Button)`
  && {
    padding: 0;
    margin-right: 1rem;
    color: var(--color-gray-200);
    font-size: inherit;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    border: 1px solid var(--color-gray-200);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 2.5rem;
  }
`;

const NewsCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const NewsCard = styled(Card)`
  && {
    position: relative;
    border-radius: var(--br-xs);
    background-color: var(--color-white);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    width: 25rem;
    height: auto;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    gap: 1rem;
  }
`;

const NewsTitle = styled.div`
  ${'' /* position: absolute; */}
  ${
    '' /* top: 1rem;
  left: 1.88rem; */
  }
  font-weight: 500;
`;

const NewsDescription = styled.div`
  ${'' /* position: absolute; */}
  ${
    '' /* top: 5rem;
  left: 1.88rem; */
  }
  font-weight: 500;
  color: var(--color-black);
  display: inline-block;
  width: 20rem;
`;

const DatePosted = styled.div`
  ${
    '' /* position: absolute;
  top: 19rem;
  left: 1.88rem; */
  }
  font-size: var(--font-size-4xs);
  font-weight: 500;
  color: var(--color-gray-100);
`;

const NewsImage = styled.img`
  ${
    '' /* position: absolute;
  top: 8rem;
  left: 1.56rem; */
  }
  border-radius: var(--br-xs);
  ${'' /* width: 21.25rem; */}
  ${'' /* height: 10.13rem; */}
  object-fit: cover;
`;

const ManageNews = () => {
  const [news, setNews] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNewsItem, setSelectedNewsItem] = useState(null);

  const fetchData = async () => {
    const API = `${process.env.REACT_APP_BASE_URL}/news/get`;
    try {
      const response = await axios.get(API);
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const navigate = useNavigate();
  const handleAddUser = () => {
    // Navigate to "/adduser" when the "Add User" button is clicked
    navigate('/addnews');
  };

  const handleApprove = (id) => {
    // Implement logic to update the status of the news item to "Approved"
    // You may need to make an API call to update the status
    console.log(`News item with ID ${id} approved.`);
  };

  const handleDelete = (id) => {
    // Implement logic to delete the news item with the specified ID
    // You may need to make an API call to delete the news item
    console.log(`News item with ID ${id} deleted.`);
    // setNews(news.filter(item => item.id !== id));
  };

  // const toggleExpandedText = (id) => {
    
  // };

  const handleModal = (id) => {
    // Open the edit modal and set the package data  
    const selected = news.data.find((item) => item.id === id);
    setSelectedNewsItem(selected);
    setModalOpen(true);
  };

  const handleCloseEditModal = () => {
    // Close the edit modal
    setModalOpen(false);
  };


  return (
    <PageContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        {/* Title "All Users" */}
        <Typography variant="h5">All News</Typography>
        {/* Add User Button */}
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddUser}>
          Add News
        </Button>
      </div>
      <MyOpportunities>
        <BackIcon component={IconArrowLeft} />
        <TextWrapper>Manage News</TextWrapper>
      </MyOpportunities>
      <NewsCardContainer>
        {Array.isArray(news.data)
          ? news.data.map((newsItem) => (
              <NewsCard key={newsItem.id}>
                <NewsTitle>{newsItem.title}</NewsTitle>
                <NewsDescription>
                  {newsItem.description.length > 100 ? `${newsItem.description.slice(0, 100)}...` : newsItem.description}
                  {newsItem.description.length > 100 && (
                    <Button onClick={() => handleModal(newsItem.id)} color="primary">
                      View More
                    </Button>
                  )}
                </NewsDescription>
                <DatePosted>{newsItem.datePosted}</DatePosted>
                <NewsImage alt="" src={newsItem.image} />
                <Button onClick={() => handleApprove(newsItem.id)} variant="contained" color="primary">
                  Approve
                </Button>
                <Button onClick={() => handleDelete(newsItem.id)} variant="contained" color="secondary">
                  Delete
                </Button>
              </NewsCard>
            ))
          : null}
      </NewsCardContainer>


      {modalOpen && (
        <Dialog open={modalOpen} onClose={handleCloseEditModal}>
          <DialogTitle>{selectedNewsItem.title}</DialogTitle>
          <DialogContent>
            <Typography>{selectedNewsItem.description}</Typography>
            <DialogContent>
            <DatePosted>{selectedNewsItem.datePosted}</DatePosted>
            </DialogContent>
            <DialogContent>
                <NewsImage alt="" src={selectedNewsItem.image} />
                </DialogContent>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseEditModal} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </PageContainer>
  );
};

export default ManageNews;
