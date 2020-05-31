import React from 'react';
import back from '../back.png';
import './TestCenters.css';

const TestCenters = ({onRouteChange}) => {
    return(
        <div>
            
            <nav className="db dt-l w-100 border-box pa3 ph5-l">
                <p className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l " title="Home" >
                    <img src={back} className="dib w2 h2 br-100 pointer grow" onClick = {() => onRouteChange('home')} alt="Site Name"/>
                </p>
                <div className="db dtc-l v-mid w-100 w-75-l tc tr-l padd">
                    <p className = 'f2 b'> Govt. Approved Test Centers for COVID-19</p>
                </div>
            </nav>
            <article className="br3 ba b--black-10 widt center shadow-5">
            <p className = 'f3'>1. Andhra Pradesh (4)</p>
            <ul>
                <li className = 'f4'>- Sri Venkateswara Institute of Medical Sciences, Tirupati</li>
                <li className = 'f4'>- Rangaraya Medical College, Kakinada</li>
                <li className = 'f4'>- Sidhartha Medical College, Vijaywada</li>
                <li className = 'f4'>- Govt. Medical College, Ananthpur</li>
            </ul>
            <p className = 'f3'>2. Assam (5)</p>
            <ul>
                <li className = 'f4'>- Gauhati Medical College, Guwahati</li>
                <li className = 'f4'>- Regional Medical Research Center, Dibrugarh</li>
                <li className = 'f4'>- Jorhat Medical College, Jorhat</li>
                <li className = 'f4'>- Silchar Medical College, Silchar</li>
                <li className = 'f4'>- Fakkhruddin Ali Ahmed Medical College, Barpeta</li>
            </ul>
            <p className = 'f3'>3. Bihar (4)</p>
            <ul>
                <li className = 'f4'>- Rajendra Memorial Research Institute of Medical Sciences, Patna</li>
                <li className = 'f4'>- Indira Gandhi Institute Medical Sciences, Patna</li>
                <li className = 'f4'>- Patna Medical College, Patna</li>
                <li className = 'f4'>- Darbhanga Medical College, Darbhanga</li>
            </ul>
            <p className = 'f3'>4. Chandigarh (2)</p>
            <ul>
                <li className = 'f4'>- Post Graduate Institute of Medical Education & Research, Chandigarh</li>
                <li className = 'f4'>- Govt. Medical College, Chandigarh</li>
            </ul>
            <p className = 'f3'>5. Chhattisgarh (2)</p>
            <ul>
                <li className = 'f4'>- All India Institute of Medical Sciences, Raipur</li>
                <li className = 'f4'>- Late Baliram Kashyap M Govt. Medical College, Jagdalpur</li>
            </ul>
            <p className = 'f3'>6. Delhi (6)</p>
            <ul>
                <li className = 'f4'>- All India Institute Medical Sciences</li>
                <li className = 'f4'>- Lady Hardinge Medical College</li>
                <li className = 'f4'>- National Centre for Disease Control</li>
                <li className = 'f4'>- Ram Manohar Lohia Hospital</li>
                <li className = 'f4'>- Institute of Liver & Biliary Sciences</li>
                <li className = 'f4'>- Army Hospital Research & Referral</li>
            </ul>
            <p className = 'f3'>7. Gujarat (6)</p>
            <ul>
                <li className = 'f4'>- BJ Medical College, Ahmedabad</li>
                <li className = 'f4'>- MP Shah Govt Medical College, Jamnagar</li>
                <li className = 'f4'>- Govt. Medical College, Surat</li>
                <li className = 'f4'>- Govt. Medical College, Bhavnagar</li>
                <li className = 'f4'>- Govt. Medical College, Vadodara</li>
                <li className = 'f4'>- Govt. Medical College, Rajkot</li>
            </ul>
            <p className = 'f3'>8. Goa (1)</p>
            <ul>
                <li className = 'f4'>- Goa Medical College, Goa</li>
            </ul>
            <p className = 'f3'>9. Haryana (2)</p>
            <ul>
                <li className = 'f4'>- Pt. B.D. Sharma Post Graduate Inst. of Med. Sciences, Rohtak, Haryana</li>
                <li>- BPS Govt. Medical College, Sonipat</li>
            </ul>
            <p className = 'f3'>10. Himachal Pradesh (2)</p>
            <ul>
                <li className = 'f4'>- Indira Gandhi Medical College, Shimla</li>
                <li>- Dr. Rajendra Prasad Govt. Medical College, Tanda</li>
            </ul>
           <p className = 'f3'> 11. Jammu & Kashmir (4)</p>
            <ul>
                <li>- Govt. Medical College, Jammu</li>
                <li>- Govt. Medical College, Jammu</li>
                <li>- Command Hospital (NC) Udhampur</li>
                <li>- Sher-i-Kashmir Institute of Medical Sciences, Srinagar</li>
                <li>- Govt. Medical College, Srinagar</li>
            </ul>
            <p className = 'f3'>12. Jharkhand (2)</p>
            <ul>
                <li>- MGM Medical College & Hospital, Jamshedpur</li>
                <li>- Rajendra Institute of Medical Sciences, Ranchi</li>
            </ul>
            <p className = 'f3'>13. Karnataka (7)</p>
            <ul>
                <li>- Hassan Inst. of Med. Sciences, Hassan</li>
                <li>- Mysore Medical College & Research Institute, Mysore</li>
                <li>- Shivamogga Institute of Medical Sciences, Shivamogga</li>
                <li>- Command Hospital (Air Force), Bengaluru</li>
                <li>- Bangalore Medical College & Research Institute, Bengaluru</li>
                <li>- National Institute of Virology, Bangalore Field Unit, Bengaluru</li>
                <li>- Gulbarga Institute of Medical Sciences, Gulbarga</li>
            </ul>
            <p className = 'f3'>14. Kerala (10)</p>
            <ul>
                <li>- National Institute of Virology, Field Unit, Allapuzzha</li>
                <li>- Govt. Medical College, Thiruvanathapuram</li>
                <li>- Govt. Medical College, Kozhikode</li>
                <li>- Govt. Medical College, Thrissur</li>
                <li>- Rajiv Gandhi Center for Biotechnology, Thiruvanathapuram</li>
                <li>- Sree Chitra Tirunal Institute of Medical Sciences, Thiruvanathapuram</li>
                <li>- State Public Health Laboratory, Trivandrum</li>
                <li>- Inter University, Kottayam</li>
                <li>- Malabar Cancer Center, Thalassery</li>
                <li>- Central University of Kerala, Periye, Kasaragod</li>
            </ul>

            <p className = 'f3'>15. Maharashtra (13)</p>
            <ul>
                <li>- National Institute of Virology, Pune</li>
                <li>- Seth GS Medical College & KEM Hospital, Mumbai</li>
                <li>- Kasturba Hospital for Infectious Diseases, Mumbai</li>
                <li>- National Institute of Virology Field Unit, Mumbai</li>
                <li>- Armed Forces Medical College, Pune</li>
                <li>- BJ Medical College, Pune</li>
                <li>- Indira Gandhi Govt. Medical College, Nagpur</li>
                <li>- Grant Medical College & Sir JJ Hospital, Mumbai</li>
                <li>- Govt. Medical College, Aurangabad</li>
                <li>- V. M. Government Medical College, Solapur</li>
                <li>- Haffkine Institute, Mumbai</li>
                <li>- Shree Bhausaheb Hire Govt. Medical College, Dhule</li>
                <li>- Government Medical College, Miraj</li>
            </ul>
            <p className = 'f3'>16. Madhya Pradesh (4)</p>
            <ul>
                <li>- All India Institute of Medical Sciences, Bhopal</li>
                <li>- National Institute for Research on Tribal Health, Jabalpur</li>
                <li>- Mahatma Gandhi Memorial Medical College, Indore</li>
                <li>- Gandhi Medical College, Bhopal</li>
            </ul>
            <p className = 'f3'>17. Manipur (2)</p>
            <ul>
                <li>- Jawaharlal Nehru Institute of Med. Sciences, Imphal East, Manipur</li>
                <li>- Regional Institute of Medical Sciences, Imphal</li>
            </ul>

            <p className ='f3'>18. Meghalaya (1)</p>
            <ul>
                <li>- North Eastern Indira Gandhi Regional Institute of Health & Medical Sciences, Shillong, Meghalaya</li>
            </ul>
            <p className ='f3'>19. Odisha (3)</p>
            <ul>
                <li>- Regional Medical Research Centre, Bhubaneshwar</li>
                <li>- All India Institute of Medical Sciences, Bhubaneshwar</li>
                <li>- SCB Medical College and Hospital, Cuttack</li>
            </ul>

            <p className ='f3'>20. Puducherry (1)</p>
            <ul>
                <li>- Jawaharlal Institute of Postgraduate Medical Education & Research, Puducherry</li>
            </ul>

            <p className ='f3'>21. Punjab (2)</p>
            <ul>
                <li>- Govt. Medical College, Amritsar</li>
                <li>- Govt. Medical College, Patiala</li>
            </ul>

            <p className ='f3'>22. Rajasthan (8)</p>
            <ul>
                <li>- Sawai Man Singh Medical College, Jaipur</li>
                <li>- Dr. Sampurnan and Medical College, Jodhpur</li>
                <li>- Jhalawar Medical College, Jhalawar</li>
                <li>- RNT Medical College, Udaipur</li>
                <li>- SP Medical College, Bikaner</li>
                <li>- All India Institute of Medical Sciences, Jodhpur</li>
                <li>- JLN Medical College, Ajmer</li>
                <li>- Govt. Medical College, Kota</li>
            </ul>

            <p className ='f3'>23. Tamil Nadu (10)</p>
            <ul>
                <li>- King Institute of Preventive Medicine & Research, Chennai</li>
                <li>- Madras Medical College, Chennai</li>
                <li>- Govt. Theni Medical College, Theni</li>
                <li>- Tirunelveli Medical College, Tirunelveli</li>
                <li>- Govt. Medical College, Thiruvarur</li>
                <li>- Kumar Mangalam Govt. Medical College, Salem</li>
                <li>- Coimbatore Medical College, Coimbatore</li>
                <li>- Govt. Medical College, Villupuram</li>
                <li>- Madurai Medical College, Madurai</li>
                <li>- K A P Viswanatham Govt. Medical College, Trichy</li>
            </ul>
            <p className ='f3'>24. Telangana (5)</p>
            <ul>
                <li>- Gandhi Medical College, Secunderabad</li>
                <li>- Osmania Medical College, Hyderabad</li>
                <li>- Sir Ronald Ross of Tropical & Communicable Diseases, Hyderabad</li>
                <li>- Nizam’s Institute of Medical Sciences, Hyderabad</li>
                <li>- Institute of Preventive Medicine, Hyderabad</li>
            </ul>
            <p className = 'f3'>25. Tripura (1)</p>
            <ul>
                 <li>- Government Medical College, Agartala</li> 
            </ul>
            <p className = 'f3'>26. Uttar Pradesh (8)</p>
            <ul>
                <li>- King George Medical University, Lucknow</li>
                <li>- Institute of Medical Sciences, Banaras Hindu University, Varanasi</li>
                <li>- Jawaharlal Nehru Medical College, Aligarh</li>
                <li>- Command Hospital, Lucknow</li>
                <li>- Lala Lajpat Rai Memorial Medical College, Meerut</li>
                <li>- Sanjay Gandhi Post Graduate Institute, Lucknow</li>
                <li>- Uttar Pradesh University of Medical Sciences (Formerly Uttar Pradesh RIMS), Saifai</li>
                <li>- Regional Medical Research Centre, Gorakhpur</li>
            </ul>
            <p className = 'f3'>27. Uttarakhand (2)</p>
            <ul>
                <li>- Govt. Medical College, Haldwani</li>
                <li>- All India Institute of Medical Sciences, Rishikesh</li>
            </ul>
            <p className = 'f3'>28. West Bengal (5)</p>
            <ul>
                <li>- National Institute of Cholera & Enteric Diseases, Kolkata</li>
                <li>- Institute of Post Graduate Medical Education & Research, Kolkata</li>
                <li>- Midnapore Medical College, Midnapore</li>
                <li>- North Bengal Medical College, Darjeeling</li>
                <li>- School of Tropical Medicine, Kolkata</li>
            </ul>
            <p className = 'f3'>29. Andaman & Nicobar Islands (1)</p>
            <ul>
                <li>- Regional Medical Research Centre, Port Blair</li>
            </ul>

            <p className = 'f3 b'>Collection sites only:</p>


            <p className = 'f3'>1. Sikkim (1)</p>
            <ul>
                <li>- Sir Thutob Namgyal Memorial (STNM), Gangtok</li>
            </ul>

            <p className = 'f3'>2. Ladakh (1)</p>
            <ul>
                <li>- Sonam Norboo Memorial Hospital (SNMH), Leh</li>
            </ul>

            <p className = 'f3'>3. Arunachal Pradesh (1)</p>
            <ul>
                <li>- Tomo Riba Institute of Health & Medical Sciences (TRIHMS), Naharlagun</li>
            </ul>
            <p className = 'f3b'>Other Laboratories in pipeline (9):</p>


            <p className = 'f3'>1. Andhra Pradesh (1)</p>
            <ul>
                <li>- Rajiv Gandhi Institute of Medical Sciences, Kadapa (No biosafety cabinet)</li>
            </ul>
            <p className = 'f3'>2. Himachal Pradesh (1)</p>
            <ul>
                <li>- Central Research Institute, Kasauli</li>
            </ul>
            <p className = 'f3'>3. Karnataka (1)</p>
            <ul>
                <li>- Vijaynagar Institute of Medical Sciences, Bellary (Reagents sent)</li>
            </ul>

            <p className = 'f3'>4. Madhya Pradesh (3)</p>
            <ul>
                <li>- Bundelkhand Medical College, Sagar (Reagents sent)</li>
                <li>- S.S. Medical College, Rewa (Reagents sent)</li>
                <li>- Gajra Raja Medical College, Gwalior (Reagents sent)</li>
            </ul>
            <p className = 'f3'>5. Mizoram (1)</p>
            <ul>
                <li>- Zoram Medical College, Aizwal, Mizoram</li>
            </ul>

            <p className = 'f3'>6. Andhra Pradesh (1)</p>
            <ul>
                <li>- Guntur Medical College, Guntur (Reagents sent)</li>
            </ul>

            <p className = 'f3'>7. Maharashtra (1)</p>
            <ul>
                <li>- Government Medical College, Silvassa (Reagents sent)</li>
            </ul>
            </article>
</div>
    );
}
export default TestCenters;