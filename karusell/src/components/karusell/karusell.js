import React from 'react';
import organizations from '../../orgs.json';
import RotatingText from '../rotating-text/rotating-text.tsx';
// import RotatingText from '../rotating-text/rotating-text2.tsx';


const Karusell = () => {
    const filteredOrgs = organizations.filter(org => org.datasetCount > 10);

    return (
        <div>
            <header>
                <h1>Der Norge deler data</h1>
                <RotatingText organizations={filteredOrgs} />
                {/* <RotatingText texts={['Hei', 'Hallo', 'Hei på deg']} /> */}
            </header>
        </div>
    );
};

export default Karusell;