import React from 'react'
import { Sidebar } from '../Components/Sidebar/Sidebar'
import { Favorite } from '../Components/Favorite/Favorite'

export const HomePage = () => {
  return (
    <>
      <div className="row">
        <div className="col col-2" style={{ width: '20%' }}>
          <Sidebar />
        </div>
        <div className="col col-7 overflow-auto" style={{ marginRight: '10px', marginLeft: '10px', maxHeight: 'calc(110vh - 100px)', overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#e4e3eb' }}>
          <div class="card" style={{ marginBottom: '10px', marginTop: '10px' }}>
            <div class="row g-0 border rounded overflow-hidden flex-md-row h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <h3 class="mb-0">Informatica</h3>
                <br />
                <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
              </div>
            </div>
          </div>
          <div class="card" style={{ marginBottom: '10px', marginTop: '10px' }}>
            <div class="row g-0 border rounded overflow-hidden flex-md-row h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <h3 class="mb-0">Informatica</h3>
                <br />
                <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
              </div>
            </div>
          </div>
          <div class="card" style={{ marginBottom: '10px', marginTop: '10px' }}>
            <div class="row g-0 border rounded overflow-hidden flex-md-row h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <h3 class="mb-0">Informatica</h3>
                <br />
                <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
              </div>
            </div>
          </div>
          <div class="card" style={{ marginBottom: '10px', marginTop: '10px' }}>
            <div class="row g-0 border rounded overflow-hidden flex-md-row h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <h3 class="mb-0">Informatica</h3>
                <br />
                <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
              </div>
            </div>
          </div>
          <div class="card" style={{ marginBottom: '10px', marginTop: '10px' }}>
            <div class="row g-0 border rounded overflow-hidden flex-md-row h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <h3 class="mb-0">Informatica</h3>
                <br />
                <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col t" >
          <Favorite />
        </div>
      </div>
    </>
  )
}


