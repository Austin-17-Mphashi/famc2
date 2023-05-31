import React, { useRef, useState, useEffect } from "react";
import { projectFirestore, auth, projectStorage as storage } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


function Events() {

  const route='events'
  const [user] = useAuthState(auth);

  const eventsRef = projectFirestore.collection(route);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const unsubscribe = eventsRef.onSnapshot((snapshot) => {
      const eventsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(eventsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div>
        <section className="py-5 mt-5 mb-5">
          <h6>Events</h6>
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-3 justify-content-center">
              {events &&
                events.map((event, index) => (
                  <Link
                    to={`${event.id}`}
                    state={{ data: event }}
                    style={{ textDecoration: "none" }}
                    key={index}
                  >
                    <div className="col mb-5">
                      <div className="card w-100 h-100">
                        <div className="card-body p-2">
                          <div className="text-center">
                            <p className="fw-bolder">
                              {event.topic}
                            </p>
                          </div>
                          <div className="text-center">
                            <p>{event.date}</p>
                          </div>
                          <div className="text-center">
                            <p>{event.time}</p>
                          </div>
                          <div className="text-center">
                            <p>{event.duration}</p>
                          </div>
                          <div className="text-center">
                            <p>{event.audience}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Events;