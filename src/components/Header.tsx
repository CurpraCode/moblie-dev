import React from "react";
import { View, Text, Image, Input } from "native-base";

import { COLORS, FONTS, SIZES, assets } from "../constant";

const HomeHeader = ({ onSearch }: any) => {
  return (
    <View bg={COLORS.primary} padding={SIZES.font}>
      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        /> */}

        <View width="45" height="45">
          {/* <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          /> */}
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
            alt="badge"
          />
        </View>
      </View>

      <View>
        <Text
          fontFamily={FONTS.regular}
          fontSize={SIZES.small}
          color={COLORS.white}
        >
          Hello Victoria 👋
        </Text>

        <Text
          color="white"
          fontFamily={FONTS.bold}
          fontSize={SIZES.large}
          marginTop={SIZES.base}
        >
          Let's find masterpiece Art
        </Text>
      </View>

      <View>
        <View
          width="100%"
          bg={COLORS.gray}
          flexDir="row"
          alignItems={"center"}
          paddingX={SIZES.font}
          paddingY={SIZES.small}
          borderRadius={SIZES.font}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
            alt="search"
          />
          <Input
            placeholder="Search NFTs"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
