"use client";
import React, { useState, useEffect } from "react";
import {
  db,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "../../firebase";
import Grouped from "../../component/Grouped";
import "../../css/review.css";

const Subject = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewIdToDelete, setReviewIdToDelete] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const reviewsCollectionRef = collection(db, "reviews");
      const querySnapshot = await getDocs(reviewsCollectionRef);
      const reviewsData = [];
      querySnapshot.forEach((doc) => {
        reviewsData.push({ id: doc.id, ...doc.data() });
      });
      setReviews(reviewsData);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const handleSubjectChange = (selectedSubject) => {
    if (selectedSubject && selectedSubject.title) {
      const name = selectedSubject.title;
      setName(name);
    } else {
      console.error("Invalid selectedSubject:", selectedSubject);
    }
  };

  const addReview = async () => {
    try {
      if (!name.trim() || !content.trim()) {
        setError("教科名と内容を入力してください");
        return;
      }
      const reviewsCollectionRef = collection(db, "reviews");
      await addDoc(reviewsCollectionRef, { name, content });
      setError("");
      fetchReviews();
      setName("");
      setContent("");
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  const deleteReview = (reviewId) => {
    setReviewIdToDelete(reviewId);
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      const reviewDocRef = doc(db, "reviews", reviewIdToDelete);
      await deleteDoc(reviewDocRef);
      setIsModalOpen(false);
      fetchReviews();
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="subject-name">授業レビュー</h1>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addReview();
        }}
      >
        <div className="form-group">
          <Grouped onChange={handleSubjectChange} />
        </div>

        <div className="form-group">
          <label htmlFor="content">内容</label>

          <textarea
            id="content"
            placeholder="内容を入力してください"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={3} // 行数を指定
            cols={60} // 列数を指定
            style={{ resize: "none" }}
          />
        </div>

        <button type="submit">レビューを投稿</button>

        {error && <p className="error-message">{error}</p>}
      </form>
      <ul className="review-list">
        {reviews.map((review) => (
          <li key={review.id} className="review-item">
            <div className="review-name">教科名： {review.name}</div>
            <div className="review-content">内容: {review.content}</div>
            <button onClick={() => deleteReview(review.id)}>削除</button>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <div className="modal-container" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p>本当に削除していいですか？</p>
            <div className="button-wrapper">
              <button onClick={confirmDelete}>はい</button>
              <button onClick={() => setIsModalOpen(false)}>いいえ</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subject;
