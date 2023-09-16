// src/components/container/InformationPage/Gatefcn.jsx
import React, { useState, useEffect } from "react"
import DragInfo from "./drag" // DragInfo import
import { tagData_Out2 } from "./data"
// scss 임포트
import "./informationfcn.scss"
import "./Gatefcn.scss"
import { useSelectedTag } from "./SelectedTagContext"

const TagList = ({ tags, onTagClick, selectedTagId }) => {
  return (
    <div className="filter-tags">
      {tags.map((tag) => (
        <button
          key={tag.id}
          className={`tag-button ${selectedTagId === tag.id ? "active" : ""}`}
          onClick={() => onTagClick(tag.id)}
        >
          {tag.name}
        </button>
      ))}
    </div>
  )
}

function GateFcn() {
  const [selectedTagId, setSelectedTagId] = useState(null)
  const [favorites, setFavorites] = useState([]) // favorites state 추가
  const { updateSelectedTag, notMatchingTag, setNotMatchingTag } =
    useSelectedTag()

  const handleFavorite = (selectedTagContent) => {
    if (favorites.includes(selectedTagContent)) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((favorite) => favorite !== selectedTagContent)
      )
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, selectedTagContent])
    }
  }

  const handleTagClick = (tagId) => {
    setSelectedTagId(tagId)
  }

  const handleTouchStart = (e) => {
    e.preventDefault()
  }

  const handleTouchMove = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "favorites") {
        setFavorites(JSON.parse(e.newValue))
      }
    }

    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || []
    setFavorites(storedFavorites)
  }, [])

  // useEffect(() => {
  //   const matchingTag = tagData_Out2.find((tag) => tag.id === selectedTagId)
  //   if (!matchingTag && selectedTagId) {
  //     setSelectedTag("design")
  //   }
  // }, [selectedTagId, setSelectedTag])

  return (
    <>
      <div className="image-size">
        <div className="gate-image1">
          <span className="building-name">충전소</span>
        </div>

        <div className="gate-image2">
          <span className="building-name">계단</span>
        </div>

        <div className={"gate-booth foodbooth"}>
          <span className="building-name">
            플리
            <br />
            마켓
          </span>
        </div>

        <div
          className={`gate-booth booth1 ${selectedTagId == 1 ? "active" : ""}`}
        />
        <div
          className={`gate-booth booth2 ${selectedTagId == 2 ? "active" : ""}`}
        />
        <div
          className={`gate-booth booth3 booth3-1 ${
            selectedTagId == 3 ? "active" : ""
          }`}
        />
        <div
          className={`gate-booth booth3 booth3-2 ${
            selectedTagId == 3 ? "active" : ""
          }`}
        />
        <div
          className={`gate-booth booth4 ${selectedTagId == 4 ? "active" : ""}`}
        />

        {/* {tagData_Out2.map((tag) => (
          <div
            key={tag.id}
            className={`gate-booth booth${tag.id} ${
              selectedTagId === tag.id ? "active" : ""
            }`}
          />
        ))}*/}
      </div>

      <div className="filters-layout-container">
        <div
          className="filter-container"
          style={{ overflowX: "scroll", flexWrap: "nowrap" }}
        >
          <h2 className="filter-title">즐겨찾는 부스</h2>
          <div className="filter-favorite-tags">
            {favorites.length > 0 ? (
              favorites.map((favorite) => (
                <button
                  className="favorite-tag-button"
                  key={favorite}
                  onClick={() => {
                    // 일치하는 tagData 아이템 찾기
                    const matchingTag = tagData_Out2.find(
                      (tag) => tag.name === favorite
                    )

                    if (matchingTag) {
                      setSelectedTagId(matchingTag.id)
                    } else {
                      setNotMatchingTag(favorite)
                      console.log(favorite) // setNotMatchingTag 이후에 console.log를 호출합니다.
                      updateSelectedTag("design", favorite)
                    }
                  }}
                >
                  {favorite}
                </button>
              ))
            ) : (
              <p className="DesignUnivFavorite">하트를 눌러 추가해주세요</p>
            )}
          </div>
        </div>

        <div className="filter-container">
          <h2 className="filter-title">외부부스</h2>
          <TagList
            tags={tagData_Out2}
            onTagClick={handleTagClick}
            selectedTagId={selectedTagId}
          />
        </div>
      </div>

      <DragInfo
        selectedTagId_out2={selectedTagId}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onFavoriteChange={handleFavorite}
      />
    </>
  )
}

export default GateFcn
