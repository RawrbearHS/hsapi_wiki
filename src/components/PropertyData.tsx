{ /* Vertical table format which includes Player Version data */}
export const PropertyData = ({children, type, defaultValue, defaultValueiPad,
  defaultValueiPhone, defaultValueMobile, defaultValueWebEditor, playerVersion}) => (
  <table className="table-vertical">
    {type &&
      <tr>
        <th>Type</th>
        <td>{type ? <code>{type}</code> : "undocumented"}</td>
      </tr>
    }
    {defaultValue &&
      <tr>
        <th>Default Value</th>
        <td><code>{defaultValue}</code></td>
      </tr>
    }
    {defaultValueiPad &&
      <tr>
        <th>Default Value (iPad/Web Editor)</th>
        <td><code>{defaultValueiPad}</code></td>
      </tr>
    }
    {defaultValueiPhone &&
      <tr>
        <th>Default Value (iPhone)</th>
        <td><code>{defaultValueiPhone}</code></td>
      </tr>
    }
    {defaultValueMobile &&
      <tr>
        <th>Default Value (Mobile)</th>
        <td><code>{defaultValueMobile}</code></td>
      </tr>
    }
    {defaultValueWebEditor &&
      <tr>
        <th>Default Value (Web Editor)</th>
        <td><code>{defaultValueWebEditor}</code></td>
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
