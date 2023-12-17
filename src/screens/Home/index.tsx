import { FlatList, Image, Pressable, ScrollView, SectionList, Text, TextInput, View } from "react-native";
import { theme } from "../../style/theme/default";
import { Header } from "../../components/Header";
import { styles } from "./style";
import imagePng from '../../../assets/coffees/Americano.png'
import imageCoffee from '../../../assets/backgroundCoffe.png'

import { coffees } from '../../utils/mock-coffes'
import { CardShowcase } from "../../components/CardShowcase";
import { useMemo, useState } from "react";
import { Card } from "../../components/Card";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInUp, Layout } from "react-native-reanimated";

type Coffee = {
  name: string;
  description: string;
  price: number;
  tags: string[];
  image: any;
  id: number;
}

type TypeCoffee = 'Traditional' | 'all' | 'Sweet' | 'Special'

export function Home() {

  const [typeFilter, setTypeFilter] = useState<TypeCoffee>('all')
  const [search, setSearch] = useState('')

  const { navigate } = useNavigation()

  const typedFiltered = typeFilter === 'all' ? coffees : coffees.filter(item => item.tags[0].toLowerCase() === typeFilter.toLowerCase())

  const textFiltered = search.length === 0 ? typedFiltered : typedFiltered.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

  const sectionList = useMemo(() => {
    const arrayDividedByCategory = [{ data: [] as Coffee[], title: 'Traditional' }, { data: [] as Coffee[], title: 'Sweet' }, { data: [] as Coffee[], title: 'Special' }]
    const referIndex = ['Traditional', 'Sweet', 'Special']
    textFiltered.map(item => {
      const index = referIndex.findIndex(i => i === item.tags[0])
      arrayDividedByCategory[index].data.push(item)
    })

    return arrayDividedByCategory
  }, [search, typeFilter])

  function handleNavigateToItem(item: Coffee) {
    navigate('product', item)
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.colors.gray[900] }}>
      <Header backgroundColor={theme.colors.gray[100]} />
      <View style={styles.showcaseContainer}>
        <Text
          style={{
            fontFamily: theme.fontFamily.heading,
            fontSize: 24,
            color: theme.colors.white,
            width: '75%'
          }}>
          Find the perfect coffee for any time of day
        </Text>
        <View style={styles.inputContainer}>
          <TextInput value={search} onChangeText={setSearch} style={styles.input} />
        </View>
        <Image source={imageCoffee} style={styles.imageBackground} alt="" />
      </View>
      <View style={{ position: 'relative' ,paddingLeft : '5%' }}>
        <Animated.FlatList
          data={coffees.slice(0,3)}
          style={styles.showcaseItemsContainer}
          contentContainerStyle={{ gap : 20 }}
          renderItem={({ item }) =>
            <CardShowcase
              description={item.description}
              image={item.image}
              price={String(item.price)}
              tags={item.tags}
              title={item.name}
            />}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(i) => String(i.id)}
        />
      </View>
      <View style={{ paddingHorizontal: '5%' }}>
        <View>
          <Text style={styles.textOurCoffees}>Our coffees  !</Text>
          <View style={styles.containerFilters}>
            <Pressable
              style={typeFilter === 'Traditional' ? styles.pressableSelected : styles.pressableUnselected}
              onPress={() => {
                typeFilter === 'Traditional' ? setTypeFilter('all') : setTypeFilter('Traditional')
              }}
            >
              <Text
                style={typeFilter === 'Traditional' ? styles.pressableTextSelected : styles.pressableTextUnselected}
              >
                Traditional
              </Text>
            </Pressable>
            <Pressable
              style={typeFilter === 'Sweet' ? styles.pressableSelected : styles.pressableUnselected}
              onPress={() => {
                typeFilter === 'Sweet' ? setTypeFilter('all') : setTypeFilter('Sweet')
              }}
            >
              <Text
                style={typeFilter === 'Sweet' ? styles.pressableTextSelected : styles.pressableTextUnselected}
              >
                Sweet
              </Text>
            </Pressable>
            <Pressable
              style={typeFilter === 'Special' ? styles.pressableSelected : styles.pressableUnselected}
              onPress={() => {
                typeFilter === 'Special' ? setTypeFilter('all') : setTypeFilter('Special')
              }}
            >
              <Text
                style={typeFilter === 'Special' ? styles.pressableTextSelected : styles.pressableTextUnselected}
              >
                Special
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <SectionList
        style={{ padding: '5%' }}
        sections={sectionList}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: { description, id, image, name, price, tags } , index}) => (
          <Animated.View entering={FadeInUp.delay(index * 100)} layout={Layout.springify()}>
            <Card
              image={image}
              description={description}
              price={String(price)}
              title={name}
              onPress={() => { handleNavigateToItem({ description, id, image, name, price, tags }) }}
            />
          </Animated.View>
        )}
        renderSectionHeader={(item) => (
          <Text style={styles.textHeading}> {item.section.title}</Text>
        )}
      />
    </ScrollView>
  )
}