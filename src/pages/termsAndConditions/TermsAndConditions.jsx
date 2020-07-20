import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import './TermsAndConditions.css';

function About() {
    return(
        <Layout>
            <div className="terms-and-conditions">
                <h1 className="d-flex flex-column align-items-center">Terms and conditions</h1>
                <p className="terms-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam erat accumsan consectetur maximus. Sed tincidunt dui ac luctus luctus. Aenean iaculis velit feugiat mi congue feugiat. Maecenas viverra lorem ligula. Duis ultricies ultricies odio sed malesuada. Cras nec metus tristique, ornare velit in, varius tellus. In vel turpis non enim laoreet laoreet sed vitae urna. Aliquam sagittis venenatis aliquet. Donec id rutrum ante. Curabitur ac felis mi. Vestibulum leo sapien, porttitor at semper vel, porta eget diam.</p>
                <p className="terms-p">Sed ex eros, imperdiet vitae velit sed, vulputate pharetra lectus. Quisque vel est sed libero feugiat molestie at at turpis. Nullam nunc lorem, luctus vitae tellus malesuada, tempus elementum purus. Pellentesque at risus auctor, aliquam arcu quis, aliquet lorem. Vestibulum ullamcorper varius auctor. Maecenas imperdiet id lorem in dapibus. Praesent in aliquam eros, in varius mi. Vivamus at felis at nunc gravida dapibus.</p>
                <p className="terms-p">In ut mi at erat sagittis pharetra ut sed libero. Curabitur aliquet semper magna, at vehicula libero malesuada at. Phasellus malesuada lacinia orci, vitae pharetra arcu commodo sed. Curabitur hendrerit eros tellus, sit amet volutpat tellus molestie sit amet. Donec gravida accumsan nunc, eu elementum metus lacinia ut. Nulla ac semper tellus, ac cursus est. Nam ac ante eu elit ultricies condimentum aliquam ac felis. Nulla placerat ut enim quis finibus. Ut vitae mattis dui.</p>
                <br />
                <Link to="/"><button className="btn btn-outline-dark">Back to home</button></Link>
            </div>
        </Layout>
    );
};

export default About;