/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace WavePortal {
  export type WaveStruct = {
    waver: string;
    message: string;
    timestamp: BigNumberish;
  };

  export type WaveStructOutput = [string, string, BigNumber] & {
    waver: string;
    message: string;
    timestamp: BigNumber;
  };
}

export interface WavePortalInterface extends utils.Interface {
  functions: {
    "getAllWaves()": FunctionFragment;
    "getTotalWaves()": FunctionFragment;
    "lastWavedAt(address)": FunctionFragment;
    "wave(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getAllWaves"
      | "getTotalWaves"
      | "lastWavedAt"
      | "wave"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getAllWaves",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalWaves",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lastWavedAt", values: [string]): string;
  encodeFunctionData(functionFragment: "wave", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "getAllWaves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalWaves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastWavedAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wave", data: BytesLike): Result;

  events: {
    "NewWave(address,uint256,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewWave"): EventFragment;
}

export interface NewWaveEventObject {
  from: string;
  timestamp: BigNumber;
  message: string;
}
export type NewWaveEvent = TypedEvent<
  [string, BigNumber, string],
  NewWaveEventObject
>;

export type NewWaveEventFilter = TypedEventFilter<NewWaveEvent>;

export interface WavePortal extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WavePortalInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getAllWaves(
      overrides?: CallOverrides
    ): Promise<[WavePortal.WaveStructOutput[]]>;

    getTotalWaves(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastWavedAt(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    wave(
      _message: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getAllWaves(
    overrides?: CallOverrides
  ): Promise<WavePortal.WaveStructOutput[]>;

  getTotalWaves(overrides?: CallOverrides): Promise<BigNumber>;

  lastWavedAt(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  wave(
    _message: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getAllWaves(
      overrides?: CallOverrides
    ): Promise<WavePortal.WaveStructOutput[]>;

    getTotalWaves(overrides?: CallOverrides): Promise<BigNumber>;

    lastWavedAt(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    wave(_message: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "NewWave(address,uint256,string)"(
      from?: string | null,
      timestamp?: null,
      message?: null
    ): NewWaveEventFilter;
    NewWave(
      from?: string | null,
      timestamp?: null,
      message?: null
    ): NewWaveEventFilter;
  };

  estimateGas: {
    getAllWaves(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalWaves(overrides?: CallOverrides): Promise<BigNumber>;

    lastWavedAt(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    wave(
      _message: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAllWaves(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalWaves(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastWavedAt(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    wave(
      _message: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
