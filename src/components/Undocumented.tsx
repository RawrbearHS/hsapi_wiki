type Undocumented = {
          message: string;
}

export default function Undocumented({message}: Undocumented) {
          if (message) return (<p>{message}</p>);
          else return (null);
}