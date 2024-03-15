"use client";

import React from "react";
import Select from "react-select";

interface CinemaTypeOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

const cinemaTypeOptions: readonly CinemaTypeOption[] = [
  { value: "2d", label: "2D", color: "#00B8D9", isFixed: false },
  { value: "3d", label: "3D", color: "#0052CC", isDisabled: false },
  { value: "imax", label: "IMAX", color: "#5243AA" },
  { value: "laser", label: "LASER", color: "#FF5630", isFixed: false },
];

const controlStyles = {
  base: "border rounded-[5px] bg-[#020000] hover:cursor-pointer py-1 min-w-[300px] min-h-[40px]",
  focus: "border-primary-400 ",
  nonFocus: "border-gray-800 hover:border-gray-400 py-1",
};
const placeholderStyles = "text-[#adadad]  pl-2 py-1 font-normal ";
const selectInputStyles = "pl-1 py-0.5";
const valueContainerStyles = "p-1 gap-1  text-[#adadad]";
const singleValueStyles = "leading-7 pl-2 py-0.5";
const multiValueStyles =
  "rounded items-center px-1.5 py-0.5 gap-1.5 text-[#dddee0] bg-[#707481]";
const multiValueLabelStyles = "leading-6 py-0.5 ";
const multiValueRemoveStyles =
  "border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md";
const indicatorsContainerStyles = "p-1 gap-1";
const clearIndicatorStyles =
  "text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800";
const indicatorSeparatorStyles = "bg-gray-300";
const dropdownIndicatorStyles =
  "p-1 text-gray-500 rounded-md hover:text-black ";
const menuStyles =
  "p-1 mt-2 border border-gray-200 bg-[#dddee0] rounded-lg p-2 ";
const groupHeadingStyles = "ml-3 mt-2 mb-1 text-gray-500 text-sm ";
const optionStyles = "bg-green hover:bg-white p-2 rounded-[4px]";
const noOptionsMessageStyles =
  "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm";

export const MultiSelect = () => (
  <Select
    isMulti
    name="cinema"
    options={cinemaTypeOptions}
    placeholder="Cinema Type"
    unstyled
    classNames={{
      control: ({ isFocused }) =>
        isFocused
          ? `${controlStyles.focus} ${controlStyles.base}`
          : `${controlStyles.nonFocus} ${controlStyles.base}`,
      placeholder: () => placeholderStyles,
      input: () => selectInputStyles,
      valueContainer: () => valueContainerStyles,
      singleValue: () => singleValueStyles,
      multiValue: () => multiValueStyles,
      multiValueLabel: () => multiValueLabelStyles,
      multiValueRemove: () => multiValueRemoveStyles,
      indicatorsContainer: () => indicatorsContainerStyles,
      clearIndicator: () => clearIndicatorStyles,
      indicatorSeparator: () => indicatorSeparatorStyles,
      dropdownIndicator: () => dropdownIndicatorStyles,
      menu: () => menuStyles,
      groupHeading: () => groupHeadingStyles,
      noOptionsMessage: () => noOptionsMessageStyles,
      option: () => optionStyles,
    }}
    classNamePrefix="select"
  />
);

interface CinemasOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

const cinemasNameOption: readonly CinemasOption[] = [
  { value: "urgoo1", label: "Urgoo", color: "#00B8D9", isFixed: false },
  { value: "urgoo2", label: "Urgoo 2", color: "#0052CC", isDisabled: false },
  { value: "tengis", label: "Tengis", color: "#5243AA" },
  { value: "gegeenten", label: "Gegeenten", color: "#FF5630", isFixed: false },
];

export const SelectCinema = () => (
  <Select
    options={cinemasNameOption}
    unstyled
    name="cinemas"
    placeholder="Cinemas"
    classNames={{
      control: ({ isFocused }) =>
        isFocused
          ? `${controlStyles.focus} ${controlStyles.base}`
          : `${controlStyles.nonFocus} ${controlStyles.base}`,
      placeholder: () => placeholderStyles,
      input: () => selectInputStyles,
      valueContainer: () => valueContainerStyles,
      singleValue: () => singleValueStyles,
      multiValue: () => multiValueStyles,
      multiValueLabel: () => multiValueLabelStyles,
      multiValueRemove: () => multiValueRemoveStyles,
      indicatorsContainer: () => indicatorsContainerStyles,
      clearIndicator: () => clearIndicatorStyles,
      indicatorSeparator: () => indicatorSeparatorStyles,
      dropdownIndicator: () => dropdownIndicatorStyles,
      menu: () => menuStyles,
      groupHeading: () => groupHeadingStyles,
      noOptionsMessage: () => noOptionsMessageStyles,
      option: () => optionStyles,
    }}
  />
);

interface showTimeOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

const showTime: readonly showTimeOption[] = [
  {
    value: "9-10",
    label: "Between 9:00 and 10:00",
    color: "#00B8D9",
    isFixed: false,
  },
  {
    value: "10-11",
    label: "Between 10:00 and 11:00",
    color: "#0052CC",
    isDisabled: false,
  },
  { value: "11-12", label: "Between 11:00 and 12:00", color: "#5243AA" },
  {
    value: "12-13",
    label: "Between 12:00 and 13:00",
    color: "#FF5630",
    isFixed: false,
  },
];

export const SelectShowTime = () => (
  <Select
    options={showTime}
    unstyled
    name="showtime"
    placeholder="Show Time"
    classNames={{
      control: ({ isFocused }) =>
        isFocused
          ? `${controlStyles.focus} ${controlStyles.base}`
          : `${controlStyles.nonFocus} ${controlStyles.base}`,
      placeholder: () => placeholderStyles,
      input: () => selectInputStyles,
      valueContainer: () => valueContainerStyles,
      singleValue: () => singleValueStyles,
      multiValue: () => multiValueStyles,
      multiValueLabel: () => multiValueLabelStyles,
      multiValueRemove: () => multiValueRemoveStyles,
      indicatorsContainer: () => indicatorsContainerStyles,
      clearIndicator: () => clearIndicatorStyles,
      indicatorSeparator: () => indicatorSeparatorStyles,
      dropdownIndicator: () => dropdownIndicatorStyles,
      menu: () => menuStyles,
      groupHeading: () => groupHeadingStyles,
      noOptionsMessage: () => noOptionsMessageStyles,
      option: () => optionStyles,
    }}
  />
);
