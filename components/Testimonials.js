'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "I wanted to share some feedback with you on the lovely boy we had at Malvern East on Tuesday.He was absolutely fantastic. As our queues of customers rapidly grew throughout the event, he quickly became the first point of contact for many of them. He greeted everyone with a smile, engaged in conversations, and clearly communicated our promotion, all while keeping customer safety as his top priority. He made it very easy for me to trust that he could manage the crowd and ensure everyone stayed safely away from the main road.At one point, when traffic began to back up from our site onto the main road and freeway, he immediately brought it to my attention, closed the carpark, and started directing traffic, a quick decisive action that made a massive difference.Although he was originally scheduled to finish up at 10 pm, the queues were still super long. When I asked if he could stay later, he was more than happy to help. After making a quick phone call, he stayed on until midnight, which was such a huge support.I truly hope this feedback can be passed on to him. He did an outstanding job on the night, and I’m very grateful for his professionalism, initiative, quick thinking, and willingness to go above and beyond.",
      name: "Natalya Taleski",
      position: "Restaurant Manager",
      company: "The Pancake Parlour",
      logo: "/assets/img/testimonials/Picture23.png",
      rating: 5
    },
    {
      id: 2,
      text: "Thank you very much. You did a fantastic job and I appreciate the work and communication. I will be using you next year and informing other schools of the great service.",
      name: "Anthony Ellul",
      position: "Senior School Engagement and Wellbeing Leader",
      company: "Greensborough College",
      logo: "/assets/img/testimonials/greensborough_secondary_college_logo.jpeg",
      rating: 5
    },
    {
      id: 3,
      text: "Sam was excellent, he was so helpful, polite and a great communicator. We will be requesting him back if the need arises.",
      name: "Andrea Houghton",
      position: "Manager",
      company: "Boatrocker Brewing Co.",
      logo: "/assets/img/testimonials/Picture21.png",
      rating: 5
    },
    {
      id: 24,
      text: "Everything went well on Saturday – aside from the rain. I do hope the guard was alright after standing in the rain all day. One of our office ladies ended up giving him an umbrella!",
      name: "Ellen",
      position: "Manager",
      company: "Flemington Primary School",
      logo: "/assets/img/testimonials/Picture20.png",
      rating: 5
    },
    {
      id: 4,
      text: "Thanks for your email, we were happy with your service and will add you to our panel of security providers for any future matters in your region. ",
      name: "Stewart Van Maarseveen",
      position: "Security Manager",
      company: "MORESOL",
      logo: "/assets/img/testimonials/Picture19.jpg",
      rating: 5
    },
    {
      id: 5,
      text: "I couldn’t have been happier with both your services and the two security guards Julia & Uzair that worked with us. They were very professional and very friendly even though I had to have Uzair standing outside in the cold most of the night! Thank you for making it so easy to use your company and I will absolutely be recommending Metro to everyone that is in need of security. Thank you very much!",
      name: "Georgia Golden",
      position: "Venue Manager",
      company: "Boatrocker Brewing Co.",
      logo: "/assets/img/testimonials/Picture18.png",
      rating: 5
    },
    {
      id: 23,
      text: "Thank you for your services over the festive period, it was greatly appreciated.I am now back in the office as the business development manager as my time covering the general manager role has come to an end, however I have copied in Cameron Jeffery our GM who will be in contact should we require your assistance once again.Thank you in advance and have a wonderful week. ",
      name: "JOHN SMALLMAN ",
      position: "Business Development Manager",
      company: "Experience Hotel Apartments",
      logo: "/assets/img/testimonials/Picture17.png",
      rating: 5
    },
    {
      id: 6,
      text: "Compliments to metro guards on great service! Our security guard, Ishtpreet, arrived on time, listened to what we wanted and implanted directions perfectly.Ishtpreet was friendly, professional and a pleasure to work with. He really assisted with ensuring the night ran smoothly, and guests were welcomed into the venue smoothly upon their arrival.Overall, I am extremely happy with the service.",
      name: "Jennifer Vessali",
      position: "Office Manager",
      company: "Lux Group Limited",
      logo: "/assets/img/testimonials/1631348591733.jpeg",
      rating: 5
    },
    {
      id: 22,
      text: "I was quite pleased with the conduct of the two security guards employed for our event last month. As it happened the event went off without a hitch, so their services were not called upon in any significant capacity, but they were courteous and professional and very willing to take on any task that was required off them.",
      name: "Simon Lasslett",
      position: "Office Manager",
      company: "Northcote High School",
      logo: "/assets/img/testimonials/Picture15.png",
      rating: 5
    },
    {
      id: 7,
      text: "Thanks for your email and everything went very well on Saturday, and I was very happy with your service.Your guard was excellent in all aspects.  He was punctual, well presented, friendly and professional and wasn’t obtrusive in any way which can be an issue with certain personalities.I will be in touch with our next event that requires your services.",
      name: "Paul Stevens",
      position: "Event Manager",
      company: "MP Events",
      logo: "/assets/img/testimonials/Picture14.png",
      rating: 5
    },
    {
      id: 21,
      text: "Thank-you for your email.  Nufarm was very pleased with the service.  Fortunately, there was not an incident, thus not a need to utilise the security staff. ",
      name: "Okan Erden",
      position: "Procurement & Import / Export Manager",
      company: "Nufarm Australia Limited",
      logo: "/assets/img/testimonials/Picture13.png",
      rating: 5
    },
    {
      id: 8,
      text: "Although Mango Lounge Bar closed in December last year, we engaged Metropolitan Guard Services on a casual basis since 2012.Metropolitan Guard Services supplied experience guards of high standard who, as a team,attended to our requirements in a professional manner. Guards were always punctual, well presented and briefed with our requirements.The company communication, and guard detail supplied ahead of every engagement, provided the confidence and certainly that events would run smoothly and be handled according to plan.We highly recommend Metropolitan Guard Services and, moving forward, they will be our first point of contact for our next hospitality business. ",
      name: "Daniel Semkiw",
      position: "Owner",
      company: "Mango Lounge Bar",
      logo: "/assets/img/testimonials/Picture12.png",
      rating: 5
    },
    {
      id: 9,
      text: "Thank you for your services at Dallas ,The guard (John) we had was very professional and easy to deal with will defiantly recommend your services .thanks again ",
      name: "James Scicluna",
      position: "Manager",
      company: "Dallas",
      logo: "/assets/img/testimonials/Picture11.jpg",
      rating: 5
    },
    {
      id: 20,
      text: "We are pleased with the services that you provided last weekend. Compared to normal guard services  this was very effective. Since the trouble makers won't challenge the guards and think twice.",
      name: "Harris Kumarage ",
      position: "Manager",
      company: "Dallas",
      logo: "/assets/img/testimonials/Picture10.jpg",
      rating: 5
    },
    {
      id: 10,
      text: "Thanks for your email.  The most pleasing issue for me was the immediate availability from the moment we booked to having someone available.I also appreciated the morning after feedback via text which was very comforting.  I would be happy to recommend your business to anyone else looking for the same services. ",
      name: "Brett Jackson",
      position: "Partner",
      company: "Business Partner",
      logo: "/assets/img/testimonials/Picture9.gif",
      rating: 5
    },
    {
      id: 11,
      text: "On behalf of the CFA I hired Metropolitan Guard Services for the 2014 Emergency Services Project Expo.I was very happy with the level of service provided to us.  The two staff assigned to our event were professional and friendly at all times.  Based on this experience, I would certainly use Metropolitan Guard Services for similar events in the future.",
      name: "Martin Murray",
      position: "Financial Contractor",
      company: "CFA",
      logo: "/assets/img/testimonials/Picture8.png",
      rating: 5
    },
    {
      id: 19,
      text: " Our event was a great night with no major problems.Your team arrived on time, we didn’t have an  issue during the night. They were both dressed in suits and acted very professionally through the night.Thank you once again.",
      name: "Nola Jansen",
      position: "Owners Corporation Manager",
      company: "Engine Property Group",
      logo: "/assets/img/testimonials/Picture7.png",
      rating: 5
    },
    {
      id: 12,
      text: "Your security guards were very professional and helpful. They assisted with some small intruder issues and even assisted in calming things down with the ranger who was having issues with our hired rides installer. Thank you. I would rate them 10/10.Have a merry Christmas and thank you again. ",
      name: "Daniela Lauria",
      position: "Manager",
      company: "Aconex",
      logo: "/assets/img/testimonials/Picture6.png",
      rating: 5
    },
    {
      id: 13,
      text: "All 3 of the guards provided by Metro Guards were organised, on time and keen to deliver the service that best work for our group. This allowed us to have a tailored setup that suited the requirements of our event, rather than the guards telling us how they will work. I had a number of guest at our event comment on the polite and helpful manner of the guards working at our event. Our experience with Metro Guards was nothing but positive. Even when we had last minute changes to our booking, Metro Guards were able to provide an additional guard at short notice. Metro Guards will be my first point of contact for any future security needs.",
      name: "Mick Delaney",
      position: "Assistant Manager",
      company: "YMCA",
      logo: "/assets/img/testimonials/images.jpeg",
      rating: 5
    },
    {
      id: 14,
      text: "Thanks for the email. This is about the 5th time we have used Metro Guards, this time round all 3 guards were good, Moe (or Mohammed im not sure) was fantastic, he took control, was pro actice and was very professional.",
      name: "Janette Godden",
      position: "General Manager",
      company: "d'Olive Quality Suites",
      logo: "/assets/img/testimonials/DimboolaOliveEstateLogo_f9052f2f-e193-4473-895d-cf91f4cfbaaa.webp",
      rating: 5
    },
    {
        id: 18,
        text: "This is about the 5th time we have used Metro Guards. Moe was fantastic, he took control, was proactive and was very professional.",
        name: "Jessica Miller",
        position: "Talent Manager",
        company: "Detmold Group",
        logo: "/assets/img/testimonials/Picture4.png",
        rating: 5
      },
    {
      id: 15,
      text: "Thank you for your prompt service and professionalism of your team. I appreciate the thorough feedback and would not hesitate to use Metro guards for future work.",
      name: "Abbey Jones",
      position: "Owners Corporation Manager",
      company: "Strata Base Pty Ltd",
      logo: "/assets/img/testimonials/Picture3.png",
      rating: 5
    },
    {
      id: 16,
      text: "Thanks a lot, we were very satisfied with the security provided at our event last week. The guards were all great at communicating during the event and were very easy to work with. We will be sure to book your services again for future events.",
      name: "Phoebe Chiller",
      position: "Youth Program Officer",
      company: "Community Services",
      logo: "/assets/img/testimonials/Picture2.gif",
      rating: 5
    },
    {
      id: 17,
      text: "The People Market has employed Metropolitan Security Guards across multiple venues, and we have been impressed with their level of detail and commitment to keeping us as the client happy. They are punctual, attentive and well experienced within the industry. They make our venues safe and instil confidence in us as the organisers that if trouble were to arise, they are always prepared and would know how to handle it accordingly. Danny is easy to reach out to, and they are always able to accommodate our every request. We recommend their services to anyone looking for a reliable and hardworking security team.",
      name: "Niki Filipovic",
      position: "Operations Manager",
      company: "Peoples Market",
      logo: "/assets/img/testimonials/Picture1.jpg",
      rating: 5
    }
  ];

  return (
    <section style={{
      background: '#f8f9fa',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '300px',
        height: '300px',
        background: 'rgba(253, 197, 26, 0.05)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '250px',
        height: '250px',
        background: 'rgba(30, 34, 71, 0.03)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        zIndex: 0
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: '#1e2247',
              color: '#fdc51a',
              padding: '10px 24px',
              borderRadius: '30px',
              fontSize: '0.875rem',
              fontWeight: '700',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '20px',
              boxShadow: '0 4px 15px rgba(30, 34, 71, 0.2)'
            }}>
              <i className="bi bi-chat-quote-fill" style={{ marginRight: '10px', fontSize: '1.1rem' }}></i>
              Client Testimonials
            </div>

            {/* Main Heading */}
            <h2 style={{
              color: '#1e2247',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              lineHeight: '1.2',
              marginBottom: '20px'
            }}>
              What Our Clients Say – Security Guard Services in Melbourne
            </h2>

            {/* Subheading */}
            <p style={{
              color: '#6c757d',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Don't just take our word for it. Hear from businesses and organizations across Melbourne who trust Metro Guards for their security needs.
            </p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="row">
          <div className="col-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: '.swiper-button-prev-custom',
                nextEl: '.swiper-button-next-custom',
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              style={{
                paddingBottom: '60px',
                paddingTop: '10px'
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div style={{
                    background: '#ffffff',
                    borderRadius: '16px',
                    padding: '35px 30px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    border: '2px solid #f0f0f0',
                    height: '380px',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(253, 197, 26, 0.2)';
                    e.currentTarget.style.borderColor = '#fdc51a';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.borderColor = '#f0f0f0';
                  }}>
                    {/* Quote Icon */}
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      fontSize: '3rem',
                      color: 'rgba(253, 197, 26, 0.15)',
                      lineHeight: 1
                    }}>
                      <i className="bi bi-quote"></i>
                    </div>

                    {/* Star Rating */}
                    <div style={{
                      marginBottom: '20px',
                      display: 'flex',
                      gap: '4px'
                    }}>
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <i key={index} className="bi bi-star-fill" style={{
                          color: '#fdc51a',
                          fontSize: '1rem'
                        }}></i>
                      ))}
                    </div>

                    {/* Testimonial Text - Fixed Height with Scroll */}
                    <div style={{
                      color: '#495057',
                      fontSize: '0.95rem',
                      lineHeight: '1.7',
                      marginBottom: '0',
                      height: '180px',
                      overflowY: 'auto',
                      fontStyle: 'italic',
                      paddingRight: '10px'
                    }}>
                      <p style={{ margin: 0 }}>
                        "{testimonial.text}"
                      </p>
                    </div>

                    {/* Client Info */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      paddingTop: '15px',
                      borderTop: '2px solid #f0f0f0',
                      marginTop: 'auto'
                    }}>
                      {/* Company Logo */}
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '8px',
                        background: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        border: '2px solid #f0f0f0',
                        padding: '5px',
                        overflow: 'hidden'
                      }}>
                        <Image
                          src={testimonial.logo}
                          alt={`${testimonial.company} logo`}
                          width={50}
                          height={50}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                          }}
                        />
                      </div>

                      {/* Name and Company */}
                      <div style={{ flex: 1 }}>
                        <h6 style={{
                          color: '#1e2247',
                          fontSize: '1rem',
                          fontWeight: '700',
                          marginBottom: '4px',
                          lineHeight: '1.3'
                        }}>
                          {testimonial.name}
                        </h6>
                        <p style={{
                          color: '#6c757d',
                          fontSize: '0.85rem',
                          margin: 0,
                          lineHeight: '1.4'
                        }}>
                          {testimonial.position}<br/>
                          <span style={{ color: '#fdc51a', fontWeight: '600' }}>{testimonial.company}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '15px',
              marginTop: '30px'
            }}>
              <button className="swiper-button-prev-custom" style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: '#1e2247',
                border: 'none',
                color: '#fdc51a',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(30, 34, 71, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#fdc51a';
                e.currentTarget.style.color = '#1e2247';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#1e2247';
                e.currentTarget.style.color = '#fdc51a';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
                <i className="bi bi-chevron-left"></i>
              </button>

              <button className="swiper-button-next-custom" style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: '#1e2247',
                border: 'none',
                color: '#fdc51a',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(30, 34, 71, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#fdc51a';
                e.currentTarget.style.color = '#1e2247';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#1e2247';
                e.currentTarget.style.color = '#fdc51a';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #1e2247;
          opacity: 0.3;
          width: 10px;
          height: 10px;
        }
        
        .swiper-pagination-bullet-active {
          background: #fdc51a;
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }

        /* Custom Scrollbar for Testimonial Text */
        .swiper-slide > div > div:nth-child(3)::-webkit-scrollbar {
          width: 6px;
        }
        
        .swiper-slide > div > div:nth-child(3)::-webkit-scrollbar-track {
          background: #f0f0f0;
          border-radius: 10px;
        }
        
        .swiper-slide > div > div:nth-child(3)::-webkit-scrollbar-thumb {
          background: #fdc51a;
          border-radius: 10px;
        }
        
        .swiper-slide > div > div:nth-child(3)::-webkit-scrollbar-thumb:hover {
          background: #1e2247;
        }
      `}</style>
    </section>
  );
}

