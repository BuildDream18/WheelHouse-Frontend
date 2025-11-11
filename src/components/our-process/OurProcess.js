import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './OurProcess.css';

export default function Home() {

    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const yOffset = -100; // Adjust this value if your header is taller/shorter
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
    <>
        <Box sx={{ mx: 'auto', mt: { xs: 3, md: 6 }, p: { xs: 2, md: 4 }, bgcolor: '#fff', borderRadius: 2, boxShadow: 3 }} className="container-process" >
            <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: '24px', md: '72px' } }} className="process-title" >
            Our Process
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '24px' }, color: '#ffffff', fontStyle: 'italic' }}>
                <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => handleScroll('explore')}>Explore</span>
                &nbsp;&bull;&nbsp;
                <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => handleScroll('discover')}>Discover</span>
                &nbsp;&bull;&nbsp;
                <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => handleScroll('map')}>Map</span>
                &nbsp;&bull;&nbsp;
                <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => handleScroll('build')}>Build</span>
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: '18px', md: '40px' } }} className="process-title-small" >
            &nbsp;
            </Typography>
        </Box>
        <Typography variant="body1" sx={{ fontSize: { xs: '20px', md: '35px' }, p: { xs: 2, md: 4 } }} className="process-introduction" id="explore">
            Explorer
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1, mx: { xs: 2, md: 20 } }}>
            <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }} className="process-introduction-quote">
            We would love to learn more about you and your project.  Request a meeting with our team to see how we could best help you.
            </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', p: { xs: 1, md: 0 } }}>
        <Button
            className="global-button"
            onClick={() => window.location.href = '/booking'}
        >
            Book a Meeting
        </Button>
        </Box>

      {/* --- PHASES SECTION START --- */}
      <Box className="phases-section">
        {/* PHASE 1 */}
        <div className="phase-block" id="discover">
          <h2>PHASE 1: DISCOVERY</h2>
          <p>
            When building custom homes or renovating, the needs of each homeowner and their projects are different. The discovery period may involve one or more of the following activities based on the specific needs of you and your project. What we can do during Discovery is not limited to these items but this gives you some idea of things we could do.
          </p>
          <div className="phase-list-container">
            <ul>
              <li>Personal meeting(s) at the Wheelhouse office, customer’s home or site</li>
              <li>Review of first meeting topics, further expanding upon ideas, discussing any concerns.</li>
              <li>Discuss ballpark costs and budgets, total scope and best logistical approach.</li>
              <li>Take initial measurements, obtain elevation points</li>
              <li>Brief attic or crawlspace inspections</li>
              <li>Take before pictures for later use</li>
              <li>Discuss standard processes and specific customer needs</li>
              <li>Diagnosis of plumbing, electrical, or roofing problems</li>
            </ul>
            <ul>
              <li>Structural analysis</li>
              <li>Investigation of water or termite damaged areas</li>
              <li>Proposal of solutions for project specific challenges</li>
              <li>Gathering of your specific tastes – Pinterest, photos, web links, etc.</li>
              <li>Rough Order Magnitude (ROM) Estimate for overall project feasibility</li>
              <li>Sharing of past project materials and methods</li>
              <li>Weighing of want’s vs. needs</li>
              <li>Cost establishment and mapping for Phase 2</li>
            </ul>
          </div>
          <div className="phase-timeline">
            <em>Timeline: 1 – 2 Weeks • Cost: $4,997</em>
          </div>
            <Button 
                className="global-button" sx={{ mt: 2 }} 
                onClick={() => window.location.href = '/booking'}
            >
                Book Your Discovery
            </Button>
        </div>

        {/* PHASE 2 */}
        <div className="phase-block" id="map">
          <h2>PHASE 2: MAPPING</h2>
          <p>
            This in-depth process is critical to successful project execution. Here you team up with Wheelhouse to get all the pertinent details worked out before construction begins. Phase 2 allows for greater transparency between all parties and takes the guesswork out of the construction process. Rather than building from an estimated price with limited detail, we prefer to first develop a “Cost to Build” for each project. This method provides greater certainty for you before entering into a construction contract. The process is customized to the specific project needs and typically involves some combination of the following:
          </p>
          <div className="phase-list-container">
            <ul>
              <li>Drafting of Schematic Designs – rough draft drawings for conceptual purposes</li>
              <li>Internal analysis for codes, grading, structural, and MEP</li>
              <li>Drafting of Construction Drawings – dimensioned and sufficient for permitting, material takeoffs and labor quoting.</li>
              <li>3D renderings</li>
              <li>Reviewal of plans with homeowners as needed</li>
              <li>Specific surface materials indicated</li>
              <li>Thorough takeoffs and estimates performed and specifications created for your specific project to establish the Cost to Build</li>
            </ul>
            <ul>
              <li>Structural sizing and layout for footers, columns, headers, floor, ceiling, and roof members.</li>
              <li>Internal meetings with individual skilled labor trades & suppliers</li>
              <li>Clear statements indicating what is included and what is not included</li>
              <li>Detailing of methods and products to be used</li>
              <li>Preliminary selection of contractors for all sub trades with backups</li>
              <li>Determination of starting prices for any Allowance figures</li>
              <li>Presentation & explanation of the Cost to Build</li>
            </ul>
          </div>
          <div className="phase-note">
            <em>
              Compensation, payment terms, and timeline for the detailed planning & budgeting phase are developed separately for each project depending on the total scope and complexity discovered in Phase 1.
            </em>
          </div>
        </div>

        {/* PHASE 3 */}
        <div className="phase-block" id="build">
          <h2>PHASE 3: BUILD</h2>
          <p>
            Once the Cost to Build has been established and agreed upon by both you and the Wheelhouse team you are ready to watch your creation begin. Wheelhouse manages all aspects of the construction and renovation process including:
          </p>
          <div className="phase-list-container">
            <ul>
              <li>Applying for and obtaining building permits</li>
              <li>Preparing and submitting documents for city and architectural plan review</li>
              <li>Procurement of items with heavy lead times</li>
              <li>Scheduling of material deliveries and labor trades</li>
              <li>Communicating regularly and timely with each homeowner</li>
              <li>Assisting with homeowner-selected finishes</li>
              <li>Site visits and inspections by Wheelhouse</li>
              <li>Inspections by city or county building codes</li>
            </ul>
            <ul>
              <li><b>Financial Management</b> (Ensuring material and labor trades are invoiced as estimated, paying all invoices for materials and labor trades, documenting written change orders for approval of any budget modifications, submitting invoices for bank draws)</li>
              <li>Punchlist execution</li>
              <li>Maintaining Licensing and General Liability Insurance throughout the project as well as a safe and tidy jobsite</li>
              <li>Debris Removal</li>
              <li>Walkthroughs with homeowners as needed</li>
            </ul>
          </div>
          <div className="phase-note">
            <em>
              Compensation, payment terms, and timeline for the construction and renovation process are determined by the Cost to Build established in Phase 2.
            </em>
          </div>
        </div>
      </Box>
      {/* --- PHASES SECTION END --- */}

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 3, md: 6 }, mb: { xs: 3, md: 6 } }}>
        <Button
          className="global-button"
          onClick={() => window.location.href = '/references'}
        >
          Continue⟶
        </Button>
      </Box>
    </>
  );
}