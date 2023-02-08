import React from 'react'
import { Container } from 'reactstrap'
import AddedAssets from './added_assets';
import AssetsOverview from './assets_overview';

const Assets = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="card">
                        <div className="card-body">
                            <h2>Assets</h2>
                        </div>
                    </div>
                    <AssetsOverview />
                    <AddedAssets />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Assets;