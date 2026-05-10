import "../../../../src/components/styles/about.css"

export default function About() {
  return (
    <div className="story-container">
      <div className="section-main-container">
        <h1 className="story-heading">Our Story</h1>
        <div className="section">
          <p className="name-story">From Saltwater to Paintbrush</p>
          <p className="story photo-space-1">
            I grew up in Nova Scotia near the Atlantic, working in the commercial fishing industry. Alongside fishing, I
            found myself painting boats, something most people avoided, but I genuinely enjoyed. Before long, other
            fishermen started calling me to help with their boats. That's where it all began. To this day, I still say
            I've got salt water in my veins.{" "}
            <span className="steve-image-section">
              <img className="steve-image" src="../../../../public/Thornhill Condo/steve.jpg" alt="steve-image" />
            </span>
          </p>
        </div>

        <div className="section ">
          <p className="name-story">Finding My Way to Toronto</p>
          <p className="story photo-space-2">
            In the mid-80s, I moved to Toronto and explored different kinds of work, mostly in customer-facing roles.
            I've always enjoyed working with people, helping, talking, and being someone they can rely on. No matter
            what I tried, I kept coming back to painting. It's what stuck.
          </p>
        </div>

        <div className="section">
          <p className="name-story">Always Came Back to the Brush</p>
          <p className="story">
            Over the years, I spent time working in places like New Brunswick and Alberta, but painting was always
            constant. No matter where I was, I kept doing what I loved. Today, I stay hands-on with my work and bring in
            a trusted team when needed for larger jobs.
          </p>
        </div>

        <div className="section">
          <p className="name-story">More Than Just Painting</p>
          <p className="story">
            As I worked with more homeowners, the conversations naturally went beyond just paint. Clients began asking
            about colors, finishes, and how everything would come together. That's when I started offering color
            consulting as part of the service so you're not just getting a paint job, but a complete, confident result.
          </p>
        </div>

        <div className="section">
          <p className="name-story">Built on Trust and Craftsmanship</p>
          <p className="story">
            I've always believed in doing honest work with quality materials and fair pricing. Over time, that's led to
            strong relationships, repeat clients, and referrals. That trust means everything.
          </p>
        </div>

        <div className="section">
          <p className="name-story">The Best Part of the Job</p>
          <p className="story">
            At the end of the day, nothing beats seeing someone walk into their freshly finished space and smile. That
            moment, that reaction is why I still love what I do.
          </p>
        </div>
      </div>
    </div>
  )
}
