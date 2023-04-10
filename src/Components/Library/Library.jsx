const libraryTemplate = {
  name: "Library",
  key: 0,
  bar: (
    <div className="row m-0 content-top-bar">
      <div className="col-auto d-flex align-items-center justify-content-around me-auto">
        <img
          className="content-top-bar-pic me-2"
          src="src/assets/library_books_white_24dp.svg"
        />
        <div className="text-white">Library</div>
      </div>

      <div className="col-auto d-flex align-items-center justify-content-around ms-auto">
        <div class="form-inline">
          <input
            type="text"
            id="form1"
            class="form-control"
            placeholder="Search"
          />
        </div>
        <button type="button" class="btn btn-secondary me-3">
          <img src="src/assets/search_white_24dp.svg" />
        </button>
        <img
          className="content-top-bar-pic me-2"
          src="src/assets/sort_white_24dp.svg"
        />
        <div className="text-white">Oldest to newest</div>
      </div>
    </div>
  ),
  layout: (tab, intoFlow) => {
    return (
      <div className="content-body py-4">
        <div className="d-flex flex-wrap align-items-center justify-content-evenly">
          {tab.content.map((item) => {
            if (item.src !== undefined) {
              return (
                <div className="mt-4 px-3 library-item" key={item.name}>
                  <div
                    className="library-item-pic"
                    onClick={() => intoFlow(tab.key, item.name)}
                  ></div>
                  <div className="d-flex library-item-desc">
                    <div className="me-auto">{item.name}</div>
                    <div className="ms-auto">Edited {item.time} hours ago</div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="mt-4 px-3 library-item" key={item.name}></div>
              );
            }
          })}
        </div>
      </div>
    );
  },
  content: [
    { src: "", name: "Card", time: "1" },
    { src: "", name: "PDF", time: "1" },
    { src: "", name: "Video", time: "2" },
    { src: "", name: "PDF1", time: "2" },
    { src: "", name: "Card1", time: "3" },
    { src: "", name: "Card2", time: "3" },
    { src: "", name: "Card3", time: "4" },
    { src: "", name: "PDF2", time: "4" },
    { src: "", name: "Card4", time: "5" },
    { src: "", name: "Video1", time: "5" },
    { src: "", name: "Video2", time: "5" },
    { src: "", name: "Card5", time: "6" },
    { src: "", name: "PDF3", time: "6" },
    { src: "", name: "Card6", time: "6" },
    { src: "", name: "PDF4", time: "6" },
  ],
};
export default libraryTemplate;
