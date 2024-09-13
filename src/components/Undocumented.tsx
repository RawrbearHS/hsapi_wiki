type Undocumented = {
          message: string;
}

export default function Undocumented({message}: Undocumented) {
          if (message) return (<p><i>{message}</i></p>);
          else return (null);
}
