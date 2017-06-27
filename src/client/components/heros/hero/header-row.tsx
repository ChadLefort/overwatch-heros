import * as _ from 'lodash';
import * as React from 'react';
import { Button, Grid, Header, Icon, Image  } from 'semantic-ui-react';
import { Hero } from '../../../models/hero';
import FavoriteHero from '../../common/favorite-hero';

type Props = {
    hero: Hero;
};

const HeaderRow = (props: Props) => {
    const { hero } = props;
    let image: JSX.Element;

    if (!_.isUndefined(hero.id)) {
        image = <Image shape="rounded" src={require(`../../../../assets/heros/${hero.id}.png`)} />;
    }

    return (
        <Grid columns={2}>
            <Grid.Row>
                <Grid.Column>
                    <Header as="h1">
                        {image} {hero.name}
                    </Header>
                </Grid.Column>
                <Grid.Column textAlign="right">
                    <FavoriteHero />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default HeaderRow;