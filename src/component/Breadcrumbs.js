import NavLink from 'umi/navlink';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

const routes = [

];

export default withBreadcrumbs(routes)(function ({breadcrumbs}) {

  return(
    <div>

      {breadcrumbs.map((breadcrumb, index) => (
        <span key={breadcrumb.key}>
        <NavLink to={breadcrumb.props.match.url}>
          {breadcrumb}
        </NavLink>
          {(index < breadcrumbs.length - 1) && <i> / </i>}

      </span>
      ))}
    </div>
  )
});
