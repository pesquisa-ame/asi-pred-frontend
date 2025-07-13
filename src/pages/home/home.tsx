import './home.css';

export const Home = () => {
  return (
    <section className="home">
      <h1>Welcome to ASI-PRED!</h1>
      <p>
        ASI-PRED is an online tool for analyzing amino acid substitutions using
        customizable substitution matrices.
      </p>
      <p>
        Users can assign different weights to well-known substitution indices
        and compute their effects either individually or in combination. This
        makes ASI-PRED a powerful resource for understanding protein variant
        similarities and exploring sequence-specific properties.
      </p>
      <p>
        Additionally, ASI-PRED performs hierarchical clustering analysis (HCA)
        to group protein variants based on their calculated distances according
        to attributed weights, providing a clear visualization of their
        relationships.
      </p>
      <p>
        ASI-PRED is especially useful for identifying patterns of mutation
        pathogenicity by leveraging well-characterized “benchmark” mutations. By
        adjusting the weights of substitution indices, users can evaluate how
        different mutations may impact protein function, aiding in the
        interpretation of variant pathogenicity.
      </p>
      <p>
        Want to know the science behind it? Visit our{" "}
        <a href="/about-us">About Us - Theory</a> page. Looking to use ASI-PRED
        for your research? Check out <a href="/cite-us">How to Cite Us</a> for
        publication details.
      </p>
    </section>
  );
};
