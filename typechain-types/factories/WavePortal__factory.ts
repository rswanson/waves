/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WavePortal, WavePortalInterface } from "../WavePortal";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "NewWave",
    type: "event",
  },
  {
    inputs: [],
    name: "getAllWaves",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "waver",
            type: "address",
          },
          {
            internalType: "string",
            name: "message",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct WavePortal.Wave[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalWaves",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
    ],
    name: "wave",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506200005d6040518060400160405280601681526020017f4920616d20736f20736d6172742c20532d4d2d522d54000000000000000000008152506200006360201b620003b21760201c565b620001f7565b62000103816040516024016200007a919062000170565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200010660201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60006200013c8262000194565b6200014881856200019f565b93506200015a818560208601620001b0565b6200016581620001e6565b840191505092915050565b600060208201905081810360008301526200018c81846200012f565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015620001d0578082015181840152602081019050620001b3565b83811115620001e0576000848401525b50505050565b6000601f19601f8301169050919050565b610c4d80620002076000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063449d46c0146100465780639a2cdc0814610062578063bd43a90814610080575b600080fd5b610060600480360381019061005b91906106ba565b61009e565b005b61006a610216565b604051610077919061093b565b60405180910390f35b610088610261565b6040516100959190610882565b60405180910390f35b60016000808282546100b09190610a42565b925050819055506100f76040518060400160405280601f81526020017f25732068617320776176656420776974682061206d6573736167653a20257300815250338361044b565b600160405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906101b69291906105af565b506040820151816002015550503373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea716428360405161020b929190610956565b60405180910390a250565b60006102596040518060400160405280601781526020017f5765206861766520256420746f74616c207761766573210000000000000000008152506000546104ea565b600054905090565b60606001805480602002602001604051908101604052809291908181526020016000905b828210156103a957838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461030e90610b16565b80601f016020809104026020016040519081016040528092919081815260200182805461033a90610b16565b80156103875780601f1061035c57610100808354040283529160200191610387565b820191906000526020600020905b81548152906001019060200180831161036a57829003601f168201915b5050505050815260200160028201548152505081526020019060010190610285565b50505050905090565b610448816040516024016103c691906108a4565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610586565b50565b6104e5838383604051602401610463939291906108c6565b6040516020818303038152906040527fe0e9ad4f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610586565b505050565b610582828260405160240161050092919061090b565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610586565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b8280546105bb90610b16565b90600052602060002090601f0160209004810192826105dd5760008555610624565b82601f106105f657805160ff1916838001178555610624565b82800160010185558215610624579182015b82811115610623578251825591602001919060010190610608565b5b5090506106319190610635565b5090565b5b8082111561064e576000816000905550600101610636565b5090565b6000610665610660846109ab565b610986565b90508281526020810184848401111561067d57600080fd5b610688848285610ad4565b509392505050565b600082601f8301126106a157600080fd5b81356106b1848260208601610652565b91505092915050565b6000602082840312156106cc57600080fd5b600082013567ffffffffffffffff8111156106e657600080fd5b6106f284828501610690565b91505092915050565b60006107078383610814565b905092915050565b61071881610a98565b82525050565b61072781610a98565b82525050565b6000610738826109ec565b6107428185610a0f565b935083602082028501610754856109dc565b8060005b85811015610790578484038952815161077185826106fb565b945061077c83610a02565b925060208a01995050600181019050610758565b50829750879550505050505092915050565b60006107ad826109f7565b6107b78185610a20565b93506107c7818560208601610ae3565b6107d081610c06565b840191505092915050565b60006107e6826109f7565b6107f08185610a31565b9350610800818560208601610ae3565b61080981610c06565b840191505092915050565b600060608301600083015161082c600086018261070f565b506020830151848203602086015261084482826107a2565b91505060408301516108596040860182610864565b508091505092915050565b61086d81610aca565b82525050565b61087c81610aca565b82525050565b6000602082019050818103600083015261089c818461072d565b905092915050565b600060208201905081810360008301526108be81846107db565b905092915050565b600060608201905081810360008301526108e081866107db565b90506108ef602083018561071e565b818103604083015261090181846107db565b9050949350505050565b6000604082019050818103600083015261092581856107db565b90506109346020830184610873565b9392505050565b60006020820190506109506000830184610873565b92915050565b600060408201905061096b6000830185610873565b818103602083015261097d81846107db565b90509392505050565b60006109906109a1565b905061099c8282610b48565b919050565b6000604051905090565b600067ffffffffffffffff8211156109c6576109c5610bd7565b5b6109cf82610c06565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610a4d82610aca565b9150610a5883610aca565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a8d57610a8c610b79565b5b828201905092915050565b6000610aa382610aaa565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610b01578082015181840152602081019050610ae6565b83811115610b10576000848401525b50505050565b60006002820490506001821680610b2e57607f821691505b60208210811415610b4257610b41610ba8565b5b50919050565b610b5182610c06565b810181811067ffffffffffffffff82111715610b7057610b6f610bd7565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f830116905091905056fea26469706673582212207bba35824468bfdf99e938f5d40c20f3889e157a9487f80bb9ac08056547ade664736f6c63430008040033";

type WavePortalConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WavePortalConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WavePortal__factory extends ContractFactory {
  constructor(...args: WavePortalConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WavePortal> {
    return super.deploy(overrides || {}) as Promise<WavePortal>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): WavePortal {
    return super.attach(address) as WavePortal;
  }
  override connect(signer: Signer): WavePortal__factory {
    return super.connect(signer) as WavePortal__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WavePortalInterface {
    return new utils.Interface(_abi) as WavePortalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WavePortal {
    return new Contract(address, _abi, signerOrProvider) as WavePortal;
  }
}
