import React from 'react';
import "@codesandbox/sandpack-react/dist/index.css";
import { Sandpack } from "@codesandbox/sandpack-react";
import {
  indexjs,
  stylescss,
  indexhtml,
  helpersjs,
  getProductsjs,
} from "./code";

interface IBasicJsSdk {
  clientId: string;
}

const BasicJsSdk = ({ clientId }: IBasicJsSdk): JSX.Element => {
  const code = `import { gateway as MoltinGateway } from '@moltin/sdk'

export const EPCC = MoltinGateway({
  client_id: '${clientId}',
  host: 'epcc-integration.global.ssl.fastly.net'
})`;

  return (
    <Sandpack
      template="vanilla"
      files={{
        "/src/get-products.ts": { code: getProductsjs, active: true },
        "/src/client.js": { code, readOnly: true },
        "/src/index.js": { code: indexjs, hidden: true },
        "/src/styles.css": { code: stylescss, hidden: true },
        "/index.html": { code: indexhtml, hidden: true },
        "/src/helpers.js": { code: helpersjs, hidden: true },
      }}
      customSetup={{
        dependencies: {
          "@moltin/sdk": "11.3.2",
        },
      }}
    />
  );
};

export default BasicJsSdk;
