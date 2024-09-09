import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Precise and Powerful',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        HSAPI gives you the toolbox you need for your next Hopscotch hacking project,
        from custom blocks to mass block placement.
      </>
    ),
  },
  {
    title: 'Full API Coverage',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We've got every block, rule and variable you'll need. Custom block
        and preset support is here too, batteries included.
      </>
    ),
  },
  {
    title: 'Integrate Hopscotch Anywhere',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        HSAPI's powerful Rust backend lets it embed on any platform,
        from mobile web browsers to fully-fledged desktop tools.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className='col col--4'>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
