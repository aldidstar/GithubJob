import React from "react";

function JobItem({ job }) {
  const { title, location, type, company, created_at } = job;

  return (
    <div>
      <div className="col">
        <div id="row" className="col-lg-4 col-12 text-center">
          <div className="box-column">
            <div className="box-top twitter"></div>
            <div className="box-bottom">
              <h4 className="box-title twitter-title">{title}</h4>
              <div id="text-detail" className="box-text">
                {company}
                <div id="text-detail" className="box-text">
                  {type}

                  <div id="text-detail" className="box-text">
                    {location}
                    <div id="text-detail" className="box-text">
                      {new Date(created_at).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobItem;
