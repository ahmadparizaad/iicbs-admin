import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Card,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import { IconArrowLeft } from '@tabler/icons';
// import img1 from 'src/views/sample-page/assets/images/opplogo.png';
// import img2 from 'src/views/sample-page/assets/images/oppmain.png';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// const blogList = [

//   {
//     id: 1,
//     title: 'Exciting Blog 1',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     datePosted: '26 Jan 2023',
//     image: img1,
//   },
//   {
//     id: 2,
//     title: 'Important Blog 2',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     datePosted: '27 Jan 2023',
//     image: img2,
//   },
//   // Add more blog items here
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

const BlogCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BlogCard = styled(Card)`
  && {
    ${'' /* position: relative; */}
    border-radius: var(--br-xs);
    background-color: var(--color-white);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    width: 25rem
    height: auto;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    gap: 1rem;
  }
`;

const BlogTitle = styled.div`
  ${
    '' /* position: absolute;
  top: 1rem;
  left: 1.88rem; */
  }
  font-weight: 500;
`;

const BlogContent = styled.div`
  ${
    '' /* position: absolute;
  top: 5rem;
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
  top: 20rem;
  left: 1.88rem; */
  }
  font-size: var(--font-size-4xs);
  font-weight: 500;
  color: var(--color-gray-100);
`;

const BlogImage = styled.img`
  ${
    '' /* position: absolute;
  top: 9rem;
  left: 1.56rem; */
  }
  border-radius: var(--br-xs);
  width: 21.25rem;
  height: 10.13rem;
  object-fit: cover;
`;

const ManageBlogs = () => {
  const [blogList, setBlogList] = useState([]);
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBlogItem, setSelectedBlogItem] = useState(null);

  const fetchData = async () => {
    const API = `${process.env.REACT_APP_BASE_URL}/blog/get`;
    try {
      const response = await axios.get(API);
      setBlogList(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleModal = (id) => {
    // Open the edit modal and set the package data
    const selected = blogList.data.find((item) => item.id === id);
    setSelectedBlogItem(selected);
    setModalOpen(true);
  };

  const handleCloseEditModal = () => {
    // Close the edit modal
    setModalOpen(false);
  };

  const handleAddUser = () => {
    // Navigate to "/adduser" when the "Add User" button is clicked
    navigate('/addblog');
  };
  return (
    <PageContainer title="All Blogs" description="View all blogs in the system">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        {/* Title "All Users" */}
        <Typography variant="h5">All Blogs</Typography>
        {/* Add User Button */}
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddUser}>
          Add Blog
        </Button>
      </div>
      <MyOpportunities>
        <BackIcon component={IconArrowLeft} />
        <TextWrapper>Manage Blogs</TextWrapper>
      </MyOpportunities>
      <BlogCardContainer>
        {Array.isArray(blogList.data)
          ? blogList.data.map((blogItem) => (
              <BlogCard key={blogItem.id}>
                <BlogTitle>{blogItem.title}</BlogTitle>
                <BlogContent>
                  {blogItem.description.length > 100
                    ? `${blogItem.description.slice(0, 100)}...`
                    : blogItem.description}
                  {blogItem.description.length > 100 && (
                    <Button onClick={() => handleModal(blogItem.id)} color="primary">
                      View More
                    </Button>
                  )}
                </BlogContent>
                <DatePosted>{blogItem.datePosted}</DatePosted>
                <BlogImage alt="" src={blogItem.image} />
              </BlogCard>
            ))
          : null}
      </BlogCardContainer>

      {modalOpen && (
        <Dialog open={modalOpen} onClose={handleCloseEditModal}>
          <DialogTitle>{selectedBlogItem.title}</DialogTitle>
          <DialogContent>
            <Typography>{selectedBlogItem.description}</Typography>
            <DialogContent>
              <DatePosted>{selectedBlogItem.datePosted}</DatePosted>
            </DialogContent>
            <DialogContent>
              <BlogImage alt="" src={selectedBlogItem.image} />
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

export default ManageBlogs;
