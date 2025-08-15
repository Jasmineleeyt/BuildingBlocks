import React, { useEffect, useState } from 'react';
import './DiscussionPage.css'
import styled from 'styled-components';

const DiscussionPage = () => {
  return (
      <div>
        <div className='searchBar'>
          <input id="query" className="input" type="search" placeholder="Search..." name="searchbar" />
        </div>
        <div className='topicList'>
          <h3 className='topics'>Topics</h3>
            <button>Trending</button>
            <button>Finance</button>
            <button>Technology</button>
            <button>Employment</button>
            <button>School</button>
            <button>Relationships</button>
        </div>
        <div className='discussionList'>
          <div className="card">
            <div className="card-details">
              <p className="text-title">Best Study Methods</p>
              <p className="text-body">Posted By: Jasmine</p>
            </div>
          </div>
          <div className="card">
            <div className="card-details">
              <p className="text-title">My Favourite Basketball Drill</p>
              <p className="text-body">Posted By: Tiff</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default DiscussionPage;