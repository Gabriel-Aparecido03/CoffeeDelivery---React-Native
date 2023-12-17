import { Image, Text, View } from "react-native";
import { styles } from "./style";
import { ReactNode } from "react";

type CardShowCasePropsType= {
  image : any
  tags : string[]
  title : string
  description : string
  price : string
}

export function CardShowcase({ description,image,price,tags,title }:CardShowCasePropsType) {
  return (
    <View style={styles.container}>
      <Image source={image} alt=""/>
      <View style={styles.tagsContainer}>
        { tags.map( item => 
          <View style={styles.tag}>
            <Text style={styles.tagText}> { item } </Text>
          </View>
        )} 
      </View>
      <Text style={styles.titleText}>{ title }</Text>
      <Text style={styles.descriptionText}>{ description }</Text>
      <View style={{ flexDirection : 'row',alignItems : 'baseline',gap: 2}}>
        <Text style={styles.auxPriceText}>r$</Text>
        <Text style={styles.priceText}>{price}</Text>
      </View>
    </View>
  )
}