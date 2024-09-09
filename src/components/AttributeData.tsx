{/* // export const AttributeData = ({children, type, version}) => (
//   <p>Type: <code>{type}</code></p>
// ) */}


{ /* Horizontal table format which includes Player Version data */}
{/*export const AttributeData = ({children, type, defaultValue, playerVersion}) => (
  <table>
    <tr>
      <th>Type</th>
      {defaultValue ? <th>Default Value</th> : ""}
      {playerVersion ? <th>Player Version</th> : ""}
    </tr>
    <tr>
      <th>{type ? <code>{type}</code> : "undocumented"}</th>
      {defaultValue ? <th><code>{defaultValue}</code></th> : ""}
      {playerVersion ? <th><code>{playerVersion}</code></th> : ""}
    </tr>
  </table>
); */}


{ /* Vertical table format which includes Player Version data */}
export const AttributeData = ({children, type, defaultValue, playerVersion}) => (
  <table className="table-vertical">
    <tr>
      <th>Type</th>
      <td>{type ? <code>{type}</code> : "undocumented"}</td>
    </tr>
    {defaultValue &&
      <tr>
        <th>Default Value</th>
        <td><code>{defaultValue}</code></td>
      </tr>
    }
    {playerVersion &&
      <tr>
        <th>Player Version</th>
        <td><code>{playerVersion}</code></td>
      </tr>
    }
  </table>
);
