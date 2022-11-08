import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../component/Filter";
import PageLoading from "../component/PageLoading";
// import VersityCard from "../component/VersityCard";
import SearchField from "../component/SearchField";
import { getVersity } from "../redux/versity/versitySlice";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Versity.css"
import "../component/VersityCard.css";
import Rating from "react-rating";

const Versity = () => {
  const { versity, loading } = useSelector((state) => state.versity);

  const [term, setTerm] = useState([]);

  useEffect(() => {
    setTerm(versity);
  }, [versity]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVersity());
  }, [dispatch]);

  const submitHandler = (e) => {
    const searchText = e.target.value;

    const matchVersity = versity.filter((versity) =>
      versity.uni_name?.toLowerCase().startsWith(searchText.toLowerCase())
    );
    setTerm(matchVersity);
    // console.log(matchVersity);
  };

  const sortByStatus = (status) => {
    const matchVersity = versity.filter(
      (versity) => versity.Vstatus === status
    );
    setTerm(matchVersity);
  };

  const sortByRating = (rating) => {
    const matchRating = versity.filter(
      (versity) => versity.Vrating === rating
    );
    setTerm(matchRating);
  };

  if (loading) {
    return <PageLoading />;
  }

  return (
    <div className="container">
      <h1 className="mt-5 pt-5">Choose My University</h1>
      <div>
        <SearchField submitHandler={submitHandler} />
        <Filter sortByStatus={sortByStatus} sortByRating={sortByRating} />
      </div>

      {/* <div className="">
        {term?.map((uniVer,id) => (
          <VersityCard uniVer={uniVer} key={id}/>
        ))}
      </div> */}
      <Container className="mb-10">
        <Row>
          {term?.map((uniVer, index) => (
            <Col
              lg={4}
              md={6}
              className="d-flex align-items-stretch gy-3"
              key={index}
            >
              <Card className="w-100">
                <Card.Img
                  variant="top"
                  src={uniVer.img}
                  className="productImage"
                />
                <Card.Body>
                  <Card.Title className="productCardTitle">
                    {uniVer.uni_name}
                  </Card.Title>
                  <Card.Text className="productCardDescription">
                    {uniVer.recommend_type}
                  </Card.Text>
                  <Card.Text className="productCardPrice">
                    <strong>{uniVer.rating} / 5.00</strong> <br/>
                    <Rating
                      initialRating={uniVer.rating}
                      emptySymbol="far fa-star icon-color"
                      fullSymbol="fas fa-star icon-color"
                      readonly
                    ></Rating>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Versity;
