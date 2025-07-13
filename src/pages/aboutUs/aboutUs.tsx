import './aboutUs.css';

export const AboutUs = () => {
  return (
    <section className="about-us">
      <h1>About Us - Theory</h1>
      <div>
        <p>
          ASI-PRED is a tool that allows different weights to be given to
          multiple amino acid substitution indexes. In addition, it allows the
          creation of hierarchical clusters of a set of substitutions.
        </p>
        <p>
          <b>Grantham&#39;s Distance:</b> The
          Grantham index consists of a formula that calculates the difference
          between amino acids based on three main aspects: (i) composition, (ii)
          polarity and (iii) molecular volume. The value resulting from the
          formula represents the distance between one amino acid to another. The
          index seeks to explain evolutionary exchanges of amino acids in
          proteins and use factors that impact these exchanges. Grantham
          explains that changes in amino acids have greater impacts on proteins
          due to the individual chemical aspects of each amino acid, and it is
          important to take this into account and not just codon exchanges in
          protein processing.
        </p>
        <p>
          <b>Sneath&#39;s Index:</b> The sneath index
          take into consideration effects that lead to changes in protein
          activity. The index evaluated three effects through different
          statistical analyzes: (i) a correlation between activity and overall
          resemblance of individual pairs of amino acids (ii) a correlation with
          the totalnumber of amino acids substituted, irrespective of which ones
          they were and (iii) correlation in the oxytocic peptides. The results
          of the index indicates that effects i and ii had a major impact in
          proteins biological activity.
        </p>
        <p >
          <b>
            Epstein&#39;s Coefficient of Difference:
          </b>{" "}
          The Epstein index calculated the distance from each aminoacid based on
          the polarity of the aminoacid and the codons mutations that led to the
          changes. According to Epstein, the amino acids interchanges can be
          divided in three types: (i) polar to polar or hydrophobic to
          hydrophobic, ii) between polar and glycine or ananine and (iii)
          between polar and hydrophobic. The indxe indicate that type i changes
          can be favourable and type iii unfavourable. However, the type ii
          changes depend on their locations at protein structure.
        </p>
        <p>
          <b>Miyata&#39;s Distance:</b> Miyata
          studied natural mutations on proteins and their effects on the protein
          structural. Based on that he was able to determine the properties that
          contributes to major changes in protein functionality. Miyata
          calculated the distance between two am inoacids based on two
          properties: i) volume and (ii) polarity.
        </p>
        <p>
          <b>Experimental Exchangeability:</b> The
          experimental exchangeability index is the most recent of the
          abovementioned tools. This index is based on statistical nalyzes of
          almost ten thousand amino acid exchanges. The index considered three
          factors: (i) predict the effects of amino acid exchanges in the
          laboratory, (ii) account for the disease-causing potential of missense
          mutations in the human population, and (iii) model the probability of
          fixation of missense mutations in evolution.
        </p>
      </div>
    </section>
  );
};
