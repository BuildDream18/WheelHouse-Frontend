import React from 'react';
import { Box, Typography } from '@mui/material';
import './References.css';
import llcImage from '../../assets/images/references/llc.jpg';
import topRatedImage from '../../assets/images/references/1.png';
import eliteServiceImage from '../../assets/images/references/2.png';
import sealImage from '../../assets/images/references/3.png';
import fiveYearsImage from '../../assets/images/references/4.png';
import epaCertifiedImage from '../../assets/images/references/5.jpg';

export default function References() {
    return (
    <>
        <Box sx={{ mx: 'auto', mt: { xs: 3, md: 6 }, p: { xs: 2, md: 4 }, bgcolor: '#fff', borderRadius: 2, boxShadow: 3 }} className="container-reference" >
            <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: '24px', md: '72px' } }} className="reference-title" >
            Our References
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: '18px', md: '40px' } }} className="reference-title-small" >
            &nbsp;
            </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', mt: 4 }}>
            <Box component="img" src={llcImage} alt="LLC Award 2022" sx={{ width: '100px', margin: '10px' }} />
            <Box component="img" src={topRatedImage} alt="Top Rated" sx={{ width: '80px', margin: '10px' }} />
            <Box component="img" src={eliteServiceImage} alt="Elite Service" sx={{ width: '80px', margin: '10px' }} />
            <Box component="img" src={sealImage} alt="Seal" sx={{ width: '80px', margin: '10px' }} />
            <Box component="img" src={fiveYearsImage} alt="5 Years" sx={{ width: '80px', margin: '10px' }} />
            <Box component="img" src={epaCertifiedImage} alt="EPA Certified" sx={{ width: '80px', margin: '10px' }} />
        </Box>

        {/* Testimonials Start */}
        <Box sx={{ mx: { xs: 2, md: 20 }, my: 4 }}>
            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                "Quality! If you’re looking for a builder who emphasizes quality over anything else, look no further. Matt went above and beyond to ensure our home was completed to his standard which honestly was much higher than our own. Matt built our home during a concrete and trades shortage and was transparent the entire time about their being in the house for several months, internally as they do other Wheelhouse owner clients. We bought our old home and had it renovated before we moved in, and he stayed engaged and updating. Wheelhouse literally took the roof off our house and added a second story and also improved our existing kitchen, living room, and other bedrooms. The old house received a facelift inside and out which absolutely saved our day and they still applied all the material value of our known buyer, one of the team members felt like family by the end of the project just like family, we were so happy to see them go! They completed our work with a timely manner and in a way so as not to be intrusive to my family’s needs in the home. We would not hesitate to work with Wheelhouse again to either renovate or create a new construction project."
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'right', mb: 4 }}>
                — DAVID H. IN GREENVILLE, SC
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                "We use Matt Bunn and Wheelhouse Construction for all manner of repairs at a lake house. Matt is timely, informative, and does outstanding work. Most of all, you can trust Matt to do what he says, when he says it will be done, at a very reasonable cost. When Matt tells me the cost is more or less the same at all times. Which is very valuable for owners of vacation homes. Matt is a rare “straight-shooter”, and I highly recommend his services."
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'right', mb: 4 }}>
                — STEPHEN S. IN GREENVILLE, SC
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                "Matt Bunn and the rest of the team with Wheelhouse Construction transformed an unfinished second room on the second floor of my 1937 historic home to a beautiful, functional, and comfortable guest suite. Matt Bunn was responsive to my questions and helped me select the right project and approach to meet my needs and budget. He was also very flexible and accommodating as the project evolved. The final result was a space that looks like it was always part of the original home. The craftsmanship and attention to detail are top notch. Matt’s team was always professional and respectful of my home and family. I highly recommend Wheelhouse for any renovation or new construction project."
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'right', mb: 4 }}>
                — PATRICK V. IN GREENVILLE, SC
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                "We hired Wheelhouse to remodel a kitchen and repair other parts of the house. The Wheelhouse team consistently kept us updated during the work. As minor issues or surprises, they were able to save the building and make it even better than before. The work was done high-quality and professionally. I truly kept an overview of the progress and even stayed within our budget. We’d definitely hire Wheelhouse Construction again should we ever decide to build a new house!"
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'right', mb: 4 }}>
                — JENNIFER S. IN GREENVILLE, SC
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                "Matt and his company did a GREAT job on our new home! My husband and I were impressed by his attention to detail from the very beginning. During the initial meetings it was very apparent that he takes his projects very seriously and meticulously approaches every detail to ensure that the final product is the highest quality goods possible. He treated all of our concerns with respect and professionalism and always made sure we were satisfied with the process and the final product. I can say that he has exceeded our own very high expectations and exceeded our needs. Even after we moved in he checked in to make sure we were happy. Matt cares for his clients as if those who wish to hesitate. Matt built our family just as another team, just as his team. We are so happy with the final product and would highly recommend Wheelhouse Construction to anyone looking to build a home. Thanks so much Matt!"
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'right', mb: 4 }}>
                — STACEY S. IN TRAVELERS REST, SC
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                “Matt and his excellent subs did a great job in building my carport ! Under extreme wet conditions they were able to complete it , in budget and on time. Matt did a great job of keeping me in touch throughout the project and made it easier . Especially liked the way he handled the permitting with the city and inspectors. I would highly recommend Wheelhouse Construction for all new and remodeling projects!”
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'right', mb: 4 }}>
                — Frank P. in Greenville, SC
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                “Matt and his crews were very professional! The end result was better than we expected. The workmanship was outstanding! The project took longer than expected but that had a lot to do with the supply companies. We highly recommend Wheelhouse Construction! We are even going to have them renovate our other 2 bathrooms.”
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'right', mb: 4 }}>
                — Susan K. in Simpsonville, SC
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                “I have hired several contractors over the years and Matt and his company have been by far the best to work with. 1. They take the time to quote a project right 2. They communicate (unheard of with other contractors) 3. Did a great job 4. Followed-up to make sure we were satisfied. I highly recommend working with Matt and Wheelhouse Construction.”
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'right', mb: 4 }}>
                — Henry P. in Greenville, SC
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                “I was impressed with these guys, they spent 2 hours looking at the work to be quoted. This included crawling under the house and climbing into the attic to be sure there would be no surprises. They explained completely the scope of work to be performed and finished on schedule.”
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'right', mb: 4 }}>
                — Dean D. in Greenville, SC
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                “We had a load-bearing wall removed between living room and den, added window in living room, expanded existing opening from kitchen to den, removed closet in kitchen and installed new door to screen porch. The wall removed involved plumbing and electrical. I was very explicit about what I wanted done. Matt added his valued input and provided a detailed scope of work. All work was done in a neat, professional manner and all employees were hard working, well trained, diligent and just nice people to have work in your home. Finished carpentry work excellent and integration of old and new flooring was amazing. Change orders were clear and fairly priced. Final project results were first class. Definitely will hire for next remodeling project.”
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'right', mb: 4 }}>
                — Wayne P. in Easley, SC
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                “Wheelhouse Construction did some front remodeling and added a front porch onto our house. We liked Matt and his employees from the very first meeting we had. Professional, yet very personable, and interested in giving the homeowner what the homeowner wants. They were very patient with our decision making, and always had great suggestions. Employees were very clean and conscientious at the work site.”
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'right', mb: 4 }}>
                — Libby B. in Greer, SC
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                “We hired Wheelhouse Construction to add on a room to our home. We were pleased with their work from start to finish. They do quality work and the whole team is trustworthy. I especially appreciated their communication with me. They listened closely to hear what we wanted. Matt did a great job of keeping me informed as to what to expect each step of the way. They have been a pleasure to work with. We are very pleased with the finished work. We would not hesitate to call on them again or to recommend them to a friend.”
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'right', mb: 4 }}>
                — Janey H. in Travelers Rest, SC
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                “Wheelhouse Construction remodeled our dining room to be a mud room with a powder room. The powder room was a complete new bathroom added to the space and we had new laminate flooring put down. Wheelhouse also took out an old inefficient door frame and built in a new one and installed a new patio door (as our old one - original to our 1940’s home - did not seal the doorway properly). We had them add 2 spigots to the outside walls of our home where there was no water access, paint the entire mudroom and new powder room. We also wanted to have rolling barn doors to separate the mudroom from our dining/sitting room - as an added bonus, not only did Wheelhouse install these for us, they custom built them for our space. All of the guys who worked on our home were considerate and respectful, Cleaned up after themselves, worked quickly and efficiently and always kept us informed of their progress. They were there when they said they would be and finished our project well within our timeframe. Matt and his team were a pleasure to work with. We had a wonderful experience and would highly recommend them to anyone looking for a contractor/builder!”
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'right', mb: 4 }}>
                — Bari S. in Greenville, SC
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                “I hired Matt and his crew to do an exterior facelift of my home with new fascia, gutters, window replacement and wood rot repair. He and his guys are very professional, diligent, trustworthy and provide an outstanding finished job. They showed up on time every morning and cleaned up thoroughly every evening. Even my neighbor who lives across the street commented to me about how she watched them every day and was very impressed with how careful and detail oriented they were. Matt Bunn is a contractor you can trust to treat you right.”
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'right', mb: 4 }}>
                — Cindy G. in Simpsonville, SC
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                “Matthew Bunn and his construction team are professional and diligent workers. From the time Matt and myself met, we went over what type of job I wanted done (extension of my master bedroom, adding a walk-in closet and master bathroom), his presentation was strong and pleasant but so was mine. The completed work was done within the time frame given to me and this job really exceeded my expectations. This was the work of a true master builder. The group is honest and they take a lot of pride in their work as they proved to me on the completed project. I feel as though I’m in a new house thanks to Wheelhouse construction.”
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'right', mb: 4 }}>
                — Linda W. in Greenville, SC
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                “Wonderful work ethic. Excellent attention to detail. Would definitely use them again.”
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'right', mb: 4 }}>
                — Jim in Alpharetta, GA
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                “Matt and his team were very professional. The bathrooms they remodeled from top to bottom were spectacular. They were very timely and cleaned up after themselves.”
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'right', mb: 4 }}>
                — Greg H. in Greenville, SC
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                “Matt Bunn and Wheelhouse Construction did a fantastic job glassing in our side porch. The construction is seamless with our current siding and it looks incredible! We’ve never spent as much time on that porch as we do now. Can’t recommend them highly enough.”
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'right', mb: 4 }}>
                — John A. in Moore, SC
            </Typography>
        </Box>
        {/* Testimonials End */}
    </>
  );
}